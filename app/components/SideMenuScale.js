import React, { Component } from 'react';
import {
  StyleSheet, View, Animated, PanResponder, Dimensions, Easing
} from 'react-native';
import { Header } from './common';

const { width, height } = Dimensions.get('window');

class SideMenuScale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen || false,
      isRadius: false,
    };
    this.isBlockDrawer = false;
    this.translateX = 0;
    this.scale = 1;
    this.scalingValue = 0.6;
    this.drawerAnimation = new Animated.Value(0);
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._onStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._onMoveShouldSetPanResponder,
      onPanResponderMove: this._onPanResponderMove,
      onPanResponderRelease: this._onPanResponderRelease
    });
  }

  onDrawerAnimation() {
    this.drawerAnimation.setValue(0);
    Animated.timing(
      this.drawerAnimation,
      {
        toValue: 1,
        duration: this.props.duration || 250,
        Easing: Easing.linear
      }
    ).start();
  }

  blockSwipeAbleDrawer = (isBlock) => {
    this.isBlockDrawer = isBlock;
  };

  _onStartShouldSetPanResponder = () => {
    if (this.state.isOpen) {
      this.scale = this.scalingValue;
      this.translateX = width * this.scalingValue;
      this.setState({ isOpen: false }, () => this.onDrawerAnimation());
    }
  };

  _onMoveShouldSetPanResponder = (e, gestureState) => {
    if (!this.isBlockDrawer) {
      return ((
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
        && gestureState.dx < 20 && gestureState.moveX < 7) || this.state.isOpen
      ) || this.state.isPan;
    }
    return false;
  };

  _onPanResponderMove = (e, { dx }) => {
    if (dx < 0 && !this.state.isOpen) return false;
    if (Math.round(dx) < width * this.scalingValue && !this.state.isOpen) {
      this.translateX = Math.round(dx);
      this.scale = width / (width + dx);
      this.frontRef.setNativeProps({
        style: {
          transform: [{ translateX: this.translateX },
            { scale: this.scale }],
          opacity: this.opacity
        }
      });
      Animated.event([
        null, { dx: this.drawerAnimation }
      ]);
    }
  };

  _onPanResponderRelease = (e, gestureState) => {
    if (gestureState.dx < 0 && !this.state.isOpen) return false;
    if (gestureState.dx > width * 0.1) {
      this.setState({ isOpen: true }, () => {
        this.scale = this.scalingValue;
        this.translateX = width * this.scalingValue;
      });
      this.onDrawerAnimation();
    } else {
      this.setState({ isOpen: false }, () => {
        this.scale = 1;
        this.translateX = 0;
        this.props.onClose && this.props.onClose();
      });
      this.onDrawerAnimation();
    }
  };

  animationInterpolate() {
    return this.state.isOpen ?
    {
      translateX: this.drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [this.translateX, width * this.scalingValue],
        extrapolate: 'clamp'
      }),
      scale: this.drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [this.scale, this.scalingValue],
        extrapolate: 'clamp'
      })
    }
      :
    {
      translateX: this.drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [this.translateX, 0],
        extrapolate: 'clamp'
      }),
      scale: this.drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [this.scale, 1],
        extrapolate: 'clamp'
      })
    };
  }

  close = () => {
    this.scale = this.scalingValue;
    this.translateX = width * this.scalingValue;
    this.setState({ isOpen: false }, () => {
      this.onDrawerAnimation();
      this.props.onClose && this.props.onClose();
    });
  };

  open = () => {
    this.scale = 1;
    this.translateX = 0;
    this.setState({ isOpen: true }, () => {
      this.onDrawerAnimation();
      this.props.onOpen && this.props.onOpen();
    })
  };

  render() {
    const translateX = this.animationInterpolate().translateX;
    const scale = this.animationInterpolate().scale;

    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          ref={ref => this.frontRef = ref}
          style={[styles.front, {
            transform: [{ translateX }, { scale }]
          },
            styles.shadow,
            this.props.styles,
            { borderBottomLeftRadius: this.state.isOpen ? 10 : 0 },
            { borderTopLeftRadius: this.state.isOpen ? 10 : 0 }
          ]
          }
        >
          <Header
            title={'Delicious'}
            titleColor={'white'}
            bgColor={'#FE4E50'}
            leftHeaderButtonIcon={require('./images/Menu.png')}
            rightHeaderButtonIcon={require('./images/Search.png')}
            onItemLeftPress={this.open.bind(this)}
            onItemRightPress={() => console.log('right')}
            style={{ borderTopLeftRadius: this.state.isOpen ? 10 : 0 }}
          />
          {this.props.children}
          {
            this.state.isOpen && <View style={styles.mask} />
          }
        </Animated.View>
        <Animated.View style={styles.drawer}>
          {this.props.content}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
  },

  drawer: {
    position: 'absolute',
    top: 0,
    width,
    height,
    zIndex: 1
  },

  front: {
    backgroundColor: 'white',
    height,
    zIndex: 2,
  },

  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'transparent'
  },

  shadow: {
    shadowOffset: {
      width: -10,
      height: 0,
    },
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOpacity: 1,
    shadowRadius: 19,
    left: 0
  },
});

export default SideMenuScale;
