import React from 'react';
import ProfileSettings from '../components/ProfileSettings.js';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings 🔨',
  };

  render() {
    return <ProfileSettings />;
  }
}
