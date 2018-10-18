import React from 'react';
import { TouchableOpacity, Text, View, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatScreen extends React.Component {
  constructor(props) {
  	super(props);
  	//pass in who the current user is from the top of the app as props and display messages 
  	//based off of that 
  	this.state = {
  		messages: [
        {
          _id: 1,
          text: 'When are you coming?',
          createdAt: new Date('2018-10-15T20:22:00'),
          user: {
            _id: 2,
            name: 'Toy Boy',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'Hello??',
          createdAt: new Date('2018-10-15T20:10:22'),
          user: {
            _id: 2,
            name: 'Toy Boy',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
  		],
  		step: 0
  	}

  	this.onSend = this.onSend.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}
        >
        <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      ),
      headerRight: (<View></View>),
      title: "Chat",
      headerTitleStyle: {
      	textAlign: 'center', 
      	alignSelf:'center'
      }   
    };
  };

   onSend(messages = []) {
    const step = this.state.step + 1;
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true, received: true }]),
      step,
    }));
  }



  render() {
    return (
      <View accessible accessibilityLabel="main" style={styles.container}>
        <GiftedChat 
          messages={this.state.messages}
          onSend={this.onSend}
          keyboardShouldPersistTaps="never"
          user={{
          	_id: 1,
          }}
        />
        <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={80}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
    backgroundColor: '#fff',
  },
  button: {
    marginLeft: 5
  },
  backButton: {
  	color: 'rgb(0,122,255)',
  	marginLeft: 3
  }

});

export default ChatScreen;