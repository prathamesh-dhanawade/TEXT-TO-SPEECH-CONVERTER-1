import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import * as Speech from 'expo-speech'
import { Header } from 'react-native-elements';
import db from './localdb';
import * as Speech from 'expo-speech'
  
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={''}
          centerComponent={{
            text:'TEXT TO SPEECH CONVERTER',
            style: { color: 'white', fontSize: 17 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
'https://thumbs.dreamstime.com/z/silhouette-man-headphones-microphone-round-blu-silhouette-man-headphones-microphone-round-blue-124292062.jpg',          }}
        />

        <Text style={{fontSize : 25 ,textAlign: 'center', textShadowColor:'red' }}>Enter the Word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            console.log(db[this.state.text])
            var word = this.state.text.toLowerCase().trim();
            db[word]?(
            this.setState({ chunks: db[word].chunks }),
            this.setState({ phonicSounds: db[word].phones })
            ):
            Alert.alert("The word does not exist in our database");
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
<View>        
          {this.state.chunks.map((item, index) => {
            return (

        speak = () => {
          var thingToSay = this.state.name;
          Speech.speak(thingToSay);
        }
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 160,
    height: 180,
    marginLeft: 105,
    marginTop:20
    
  }
});
