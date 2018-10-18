import React from 'react';
import { TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends 👥',
  };

  state = {
    friends: ['Jean Marx', 'Michael Chi', 'Lana Rey', 'Kei Hao', 'Roy Lee', 'Kid Brick', 'Lemon Squeeze', 'Temple Run', 'Zendaya Boy', 'Girl Wendy', 'Aldin Drake', 'Menlo Square', 'Urk Sand', 'Fred Williams', 'Hender Lit', 'Mixed Feelings', 'Casper This', 'Toy Boy', 'Zach Hill', 'Stormy Dag', 'Nick Martin', 'Zachary Hansen']
  };

  navigateUser = () => {
    this.props.navigation.navigate('Chat', {name: 'Chad'});
  }

  render() {
  	const sorted = this.state.friends.sort(function(a, b){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    });
    const friends = sorted.map((ele, i) => <TouchableOpacity onPress={this.navigateUser}><Text style={styles.getStartedText} key={i}>{ele}</Text></TouchableOpacity>);
    return (
      <ScrollView style={styles.container}>
        {friends}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 21,
    color: 'black',
    lineHeight: 31,
    paddingLeft: 7,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(96,100,109, 0.15)'
  }
});
