import React, { Component } from 'react';
import { Image, ListView } from 'react-native';
import MenuSectionItems from './MenuSectionItems';
import MenuRowItems from './MenuRowItems';

class Menu extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const data = [
      {
        "category": 'Main Menu',
        "menu": [
          { 'name': 'Favorites' },
          { 'name': 'Shopping List' },
          { 'name': 'Recomendations' },
          { 'name': 'New Recipes' }
        ]
      },
      {
        "category": 'World Food',
        "menu": [
          { 'name': 'Italian'},
          { 'name': 'French'},
          { 'name': 'British'},
          { 'name': 'Asian'},
          { 'name': 'Mexican'}
        ]
      }
    ];
    this.dataSource = ds.cloneWithRows(data);
  }

  _createRowMenu(item) {
    return (
      <MenuRowItems name={item.name} onPress={() => alert(item.name)} />
    );
  }

  renderRow(item) {
    return (
      <MenuSectionItems category={item.category}>
        <ListView
          dataSource={
            new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(item.menu)}
          renderRow={this._createRowMenu.bind(this)}
        />
      </MenuSectionItems>
    );
  }

  render() {
    return (
      <Image
        style={styles.backgroundStyle}
        source={require('./images/Background2.png')}
      >
        <ListView
          style={{ flex: 1 }}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </Image>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
};

export default Menu;
