import React, { Component } from 'react';
import { Image, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SideMenuScale from './SideMenuScale';
import Menu from './Menu';
import Tabs from './Tabs.js';
import FoodItem from './FoodItem';

const arrTabSeting = [
  {
    title: 'All',
    backgroundColor: '#e3002e',
    isSelected: true,
  },
  {
    title: 'TRENDING',
    backgroundColor: '#f2b303',
    isSelected: false,
  },
  {
    title: 'NEW',
    backgroundColor: '#af0158',
    isSelected: false,
  },
  {
    title: 'Ẩm thực',
    backgroundColor: '#7f3888',
    isSelected: false,
  }
];

class FoodList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(['a', 'b', 'c']);
  }

  renderRow(item) {
    return (
      <FoodItem food={item} onPress={() => { Actions.foodDetail(); }} />
    );
  }

  render() {
    return (
      <SideMenuScale content={<Menu />} >
        <Image style={styles.backgroundStyle} source={require('./images/Background2.png')}>
          <Tabs dataSource={arrTabSeting} >
            <ListView
              style={{ flex: 1, backgroundColor: 'transparent' }}
              dataSource={this.dataSource}
              renderRow={this.renderRow.bind(this)}
            />
          </Tabs>
        </Image>
      </SideMenuScale>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
};

export default FoodList;
