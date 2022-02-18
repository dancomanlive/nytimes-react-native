import React, {FunctionComponent, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  FirstStackParamList,
  SecondStackParamList,
  ThirdStackParamList,
  FourthStackParamList,
  FifthStackParamList,
  LoginStackParamList,
  TabStackParamList,
} from '@src/types/NavigationRouterTypes';

import {AppRoute, LoginRoute} from '@src/constants/Routes';

import FirstScreen from '@src/screens/first/FirstScreen';
import SecondScreen from '@src/screens/second/SecondScreen';
import ThirdScreen from '@src/screens/third/ThirdScreen';
import FourthScreen from '@src/screens/fourth/FourthScreen';
import FifthScreen from '@src/screens/fifth/FifthScreen';
import ProfileScreen from '@src/screens/other/Profile';
import LoginScreen from '@src/screens/login/Login';
import ForgotPassword from '@src/screens/login/ForgotPassword';

import Theme from '@src/styles/Theme';
// import Toast from 'react-native-toast-message';

const options = {
  headerTransparent: true,
  headerTitle: '',
  headerBackTitleVisible: false,
  headerBackTitle: '',
};

const tabOptions = {
  headerShown: false,
  title: '',
};

const FirstStack = createStackNavigator<FirstStackParamList>();
const FirstStackScreen: FunctionComponent = () => {
  return (
    <FirstStack.Navigator>
      <FirstStack.Screen
        name={AppRoute.FIRST}
        component={FirstScreen}
        options={options}
      />
    </FirstStack.Navigator>
  );
};

const SecondStack = createStackNavigator<SecondStackParamList>();
const SecondStackScreen: FunctionComponent = () => {
  return (
    <SecondStack.Navigator>
      <SecondStack.Screen
        name={AppRoute.SECOND}
        component={SecondScreen}
        options={options}
      />
    </SecondStack.Navigator>
  );
};

const ThirdStack = createStackNavigator<ThirdStackParamList>();
const ThirdStackScreen: FunctionComponent = () => {
  return (
    <ThirdStack.Navigator>
      <ThirdStack.Screen
        name={AppRoute.THIRD}
        component={ThirdScreen}
        options={options}
      />
    </ThirdStack.Navigator>
  );
};

const FourthStack = createStackNavigator<FourthStackParamList>();
const FourthStackScreen: FunctionComponent = () => {
  return (
    <FourthStack.Navigator>
      <FourthStack.Screen
        name={AppRoute.FOURTH}
        component={FourthScreen}
        options={options}
      />
    </FourthStack.Navigator>
  );
};

const FifthStack = createStackNavigator<FifthStackParamList>();
const FifthStackScreen: FunctionComponent = () => {
  return (
    <FifthStack.Navigator>
      <FifthStack.Screen
        name={AppRoute.FIFTH}
        component={FifthScreen}
        options={options}
      />
      <FifthStack.Screen
        name={AppRoute.PROFILE}
        component={ProfileScreen}
        options={options}
      />
    </FifthStack.Navigator>
  );
};

const LoginStack = createStackNavigator<LoginStackParamList>();
const LoginStackScreen: FunctionComponent = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name={LoginRoute.LOGIN}
        component={LoginScreen}
        options={options}
      />
      <LoginStack.Screen
        name={LoginRoute.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={options}
      />
    </LoginStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<TabStackParamList>();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="FirstTab"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Theme.GREEN_COLOR[700],
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'FirstTab':
              iconName = focused ? 'radio-outline' : 'radio';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'SecondTab':
              iconName = focused ? 'duplicate-outline' : 'duplicate';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'ThirdTab':
              iconName = focused ? 'barcode-outline' : 'barcode';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'FourthTab':
              iconName = focused ? 'chatbox-outline' : 'chatbox';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'FifthTab':
              iconName = focused ? 'settings-outline' : 'settings';
              return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen
        name="FirstTab"
        component={FirstStackScreen}
        options={tabOptions}
      />
      <Tab.Screen
        name="SecondTab"
        component={SecondStackScreen}
        options={tabOptions}
      />
      <Tab.Screen
        name="ThirdTab"
        component={ThirdStackScreen}
        options={tabOptions}
      />
      <Tab.Screen
        name="FourthTab"
        component={FourthStackScreen}
        options={tabOptions}
      />
      <Tab.Screen
        name="FifthTab"
        component={FifthStackScreen}
        options={tabOptions}
      />
    </Tab.Navigator>
  );
};

const Navigator: FunctionComponent = () => {
  const navigationRef = React.useRef(null);
  useReduxDevToolsExtension(navigationRef);
  const token = '123xyz';

  useEffect(() => {
    Ionicons.loadFont();
  }, []);

  return (
    <NavigationContainer>
      {token ? <BottomTabs /> : <LoginStackScreen />}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </NavigationContainer>
  );
};

export default React.memo(Navigator);
