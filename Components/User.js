import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button
} from 'react-native';
import { useGlobalState } from '../state/index';

const User = ({ navigation }) => {
  const [userName, setUserName] = useGlobalState('userName');
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.title}>Welcome To Pokemon!</Text>
        <Image
          source={require('../assets/pokeball.png')}
          style={styles.pokeballImg}
        />
        <TextInput
          style={styles.userNameInput}
          placeholder="Enter Your Name"
          onChangeText={value => (setUserName(value))}
          value={userName}
        />
        <Button onPress={() => navigation.replace('Pokemon World')} title='Start Exploring'></Button>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    padding:30,
    display: 'flex',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
  },
  userNameInput: {
    height: 25,
    borderWidth: 0.2,
    borderColor: '#000',
    textAlign: 'center',
    backgroundColor: '#fff',
    marginBottom:50,
  },
  pokeballImg: {
    width: 150,
    height: 150,
    marginStart:50,
    marginBottom:20,
  },
});
