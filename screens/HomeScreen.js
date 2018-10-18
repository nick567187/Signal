import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fort: false,
      wow: false,
      lol: false
    };
  }

  static navigationOptions = {
    header: null,
  };

  addFort = () => {
    this.setState({
      fort: true,
      wow: false,
      lol: false
    });
  }

  addWow = () => {
    this.setState({
      fort: false,
      wow: true,
      lol: false
    });
  }

  addLol = () => {
    this.setState({
      fort: false,
      wow: false,
      lol: true
    });
  }

  addGame = () => {

  }

  navigate = () => {
    this.props.navigation.navigate('Chat', {name: 'Chad'});
  }

  render() {
    //todo dynamically render game entries.
    //todo implement button and popup modal to add new games from a list of possible choices
    const fort = this.state.fort ? <Text style={styles.gameEntries}>Nick Chang</Text> : null;
    const wow = this.state.wow ? <Text style={styles.gameEntries}>Nick Chang</Text> : null;
    const lol = this.state.lol ? <Text style={styles.gameEntries}>Nick Chang</Text> : null;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/robot-dev.png')
              }
              style={styles.welcomeImage}
            />
          </View>
           
          <View style={styles.header}>
            <Text style={styles.banner}>Games </Text>
          </View>
          <Button style={styles.addGame} title="+" onPress={this.addGame}/>

          <TouchableOpacity id="Fort" onPress={this.addFort} style={styles.topHeader}>
            <Text style={styles.gameBanner}>Fortnite </Text><Image style={{width:30, height: 30}}source={{uri: 'https://mbtskoudsalg.com/images/free-download-png-8.png'}}/>
          </TouchableOpacity>  
            <Text style={styles.gameEntries}>Michael Chi</Text>
            <Text style={styles.gameEntries}>Lana Rey</Text>
            <Text style={styles.gameEntries}>Kid Brick</Text>
            <Text style={styles.gameEntries}>Zach Hill</Text>
            {fort}

          <TouchableOpacity id="Wow" onPress={this.addWow} style={styles.topHeader}>
            <Text style={styles.gameBanner}>World of Warcraft </Text><Image style={{width:30, height: 30}}source={{uri: "http://pluspng.com/img-png/world-of-warcraft-png-file-wow-cataclysm-png-256.png"}}/>
          </TouchableOpacity>
            <Text style={styles.gameEntries}>Kei Hao</Text>
            <Text style={styles.gameEntries}>Roy Lee</Text>
            {wow}

          <TouchableOpacity id="Lol" onPress={this.addLol} style={styles.topHeader}>
            <Text style={styles.gameBanner}>League of Legends </Text><Image style={{width:30, height: 30}}source={{uri: 'http://www.macupdate.com/images/icons256/47210.png'}}/>
          </TouchableOpacity>
            <TouchableOpacity onPress={this.navigate}><Text style={styles.gameEntries}>Toy Boy</Text></TouchableOpacity>
            <Text style={styles.gameEntries}>Stormy Dag</Text>
            <Text style={styles.gameEntries}>Zachary Hansen</Text>
            <Text style={styles.gameEntries}>Nick Martin</Text>
            <Text style={styles.gameEntries}>Hender Lit</Text>
            {lol}
        </ScrollView>
      
      </View>
    );
  }
}

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 17/2,
    marginRight: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  addGame: {
    alignSelf: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FDD7E4',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(96,100,109, 0.3)',    
  },
  topHeader: {
    flexDirection: 'row',
    backgroundColor: '#c2c2f0',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(96,100,109, 0.3)',    
  },
  banner: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  gameBanner: {
    alignSelf: 'flex-start',
    paddingLeft: 3,
    fontSize: 24,
    lineHeight: 35,
    paddingLeft: 7,
    textAlign: 'center',

  },
  gameEntries: {
    fontSize: 21,
    color: 'black',
    lineHeight: 31,
    paddingLeft: 7,
    borderBottomWidth: 1,
    borderColor: 'rgba(96,100,109, 0.15)',
    backgroundColor: '#fff',
  },
  gameEntryView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  }
});
