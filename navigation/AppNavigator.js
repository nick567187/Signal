import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatScreen from '../screens/ChatScreen.js';
import MessagesScreen from '../screens/MessagesScreen.js';

const ChatNavigator = createStackNavigator({ Chat: ChatScreen });
const MessagesNavigator = createStackNavigator({ Message: MessagesScreen});

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Chat: ChatNavigator,
  Messages: MessagesNavigator
});