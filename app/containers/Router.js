import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SplashScreen from '../components/SplashScreen';
import FoodList from '../components/FoodList';
import FoodDetail from '../components/FoodDetail';
import LoginApp from '../containers/LoginApp';
import RegisterForm from '../components/RegisterForm';

//FE4E50
const RouterComponent = () => (
  <Router>
    <Scene key="SplashScreen" hideNavBar >
      <Scene key="splashScreen" component={SplashScreen} />
    </Scene>
    <Scene key="Login" direction="vertical" hideNavBar >
      <Scene key="loginForm" component={LoginApp} />
      <Scene key="registerForm" component={RegisterForm} direction="vertical" />
    </Scene>
    <Scene key="Main" direction="vertical" >
      <Scene key="foodList" component={FoodList} hideNavBar />
      <Scene
        key="foodDetail"
        component={FoodDetail}
        hideNavBar={false}
        title={'Tasty vegetable salad'}
        navigationBarStyle={{ backgroundColor: '#FE4E50' }}
        titleStyle={{ color: 'white' }}
        leftButtonIconStyle={{ tintColor: 'white' }}
      />
    </Scene>
  </Router>
);

export default RouterComponent;
