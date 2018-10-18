import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class MessagesScreen extends React.Component {
  static navigationOptions = {
    title: 'Messages 💬',
  };
   
  navigateUser = () => {
    this.props.navigation.navigate('Chat', {name: 'Chad'});
  }

  render() {
    //come up with logic to dynamically render each entry based off of who i've talked to. 
    //this might involve doing a get request on componentdidmount to check for new state
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.space} onPress={this.navigateUser}>
          <Text style={styles.getStartedText}>Toy Boy</Text><Text style={styles.invisibleText}>_____________________</Text><Text style={styles.secondaryText}>When are you coming?</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this.navigateUser}>
          <Text style={styles.getStartedText}>Zach Hill</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this.navigateUser}>
          <Text style={styles.getStartedText}>Stormy Dag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigateUser}>
          <Text style={styles.getStartedText}>Fred Williams</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  },
  secondaryText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'rgba(96,100,109, 0.24)',
    lineHeight: 31,
    paddingRight: 11,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(96,100,109, 0.15)'
  },
  invisibleText: {
    alignSelf: 'flex-end',
    fontSize: 15,
    color: 'rgba(255,255,255, 0)',
    lineHeight: 31,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(96,100,109, 0.15)'
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
