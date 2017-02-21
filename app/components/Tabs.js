import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ListView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView
} from 'react-native';

const { width } = Dimensions.get('window');

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSelected: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      data: this.props.dataSource,
      isScroll: false,
      page: 0,
    };
  }

  handleClick(rowData, rowID) {
    rowData.isSelected = !rowData.isSelected;
    const dataClone = this.state.data;

    const unSelected = dataClone[this.state.indexSelected];
    unSelected.isSelected = !unSelected.isSelected;

    dataClone[this.state.indexSelected] = unSelected;
    dataClone[rowData.id] = rowData;

    this.setState({
      data: dataClone,
      indexSelected: rowID,
      page: rowID
    });

    if (Platform.OS === 'android') {
      this._scrollView.scrollTo({ x: rowID * width, animated: true });
    }
  }

  _renderRow(rowData, rowID) {
    const selected = (rowData.isSelected === true) ? '#FE4E50' : 'rgba(255, 255, 255, 0.2)';
    return (
      <TouchableWithoutFeedback onPress={this.handleClick.bind(this, rowData, rowID)}>
        <View style={[styles.item, { backgroundColor: selected }]}>
          <Text style={styles.textTitle}>{rowData.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _children(children = this.props.children) {
    return React.Children.map(children, (child) => child);
  }

  _renderContent() {
    return this._children().map((child, idx) => {
      return (
        <View key={idx} style={{ flex: 1, width }}>
          {child}
        </View>
      );
    });
  }

  _renderScrollableContent() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        alwaysBounceVertical={false}
        directionalLockEnabled
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        contentOffset={{ x: this.state.page * width, }}
        ref={(scrollView) => { this._scrollView = scrollView; }}
      >
        {this._renderContent()}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <ListView
            style={styles.listView}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            dataSource={this.state.dataSource}
            renderRow={(rowDataTabs, sectionIDTabs, rowIDTabs) =>
              this._renderRow(rowDataTabs, rowIDTabs)
            }
            bounces={false}
            enableEmptySections
          />
        </View>
        <View style={{ flex: 1 }}>
          {this._renderScrollableContent()}
        </View>
      </View>

    );
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.data)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
  },

  listView: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
  },

  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    // paddingLeft: 10,
    // paddingRight: 10,
    // marginTop: 10,
    // marginBottom: 10,
    // marginRight: 10,
    // marginLeft: 10,
    margin: 8,
    borderRadius: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

  textTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  }
});
