import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatScreen from '../screens/ChatScreen.js';
import MessagesScreen from '../screens/MessagesScreen.js';

const ChatNavigator = createStackNavigator({ Chat: ChatScreen });
const MessagesNavigator = createStackNavigator({ Message: MessagesScreen});

export default createSwitchNavigator({
  // TODO: add another route here for authentication
  Main: MainTabNavigator,
  Chat: ChatNavigator,
  Messages: MessagesNavigator
});