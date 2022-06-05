import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useGlobalState } from '../state/index';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const UserProfile = ({navigation}) => {
  const userName = useGlobalState('userName');
  return (
    <View style={{backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={styles.close}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/close.jpg')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/pokemon-go.png')}
          style={{
            width: 100,
            height: 60,
            position: 'absolute',
            left: 20,
            top: 50,
          }}
        />
        <Image
          source={require('../assets/character.png')}
          style={styles.characterImg}
        />
        <View style={styles.team}>
          <Image
            source={require('../assets/valor2.png')}
            style={{width: 50, height: 50}}
          />
          <Text>Valor</Text>
        </View>
        <Text
          style={{
            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 30,
            marginBottom: 13,
          }}>
            {userName[0]}
        </Text>
        <Text
          style={{
            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          }}>
            Level 1
        </Text>
        <Text
          style={{
            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 1,
          }}>
          100/ 1000 XP
        </Text>
        <View
          style={{
            borderTopWidth: 0.5,
            borderTopColor: 'grey',
            width: width * 0.85,
            marginTop: 40,
          }}
        />
        <View style={styles.infoCont}>
          <View style={styles.info}>
            <Text style={styles.textLeft}>Distance Walked</Text>
            <Text style={styles.textRight}>0.5 km</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textLeft}>Pokemons Caught</Text>
            <Text style={styles.textRight}>0</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.textLeft, {marginRight: 40}]}>Total XP Activity</Text>
            <Text style={[styles.textRight]}>220</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  characterImg: {
    width: 150,
    height: 350,
    marginLeft: 20,
  },
  team: {
    position: 'absolute',
    right: 20,
    top: 50,
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    height: height,
    backgroundColor: '#fff',
    marginHorizontal: 7,
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  close: {
    position: 'absolute',
    right: '45%',
    bottom: 50,
    zIndex: 1,
  },
  infoCont: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25,
  },
  info: {
    width: width * 0.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  textLeft: {
    color: 'darkgreen',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textRight: {
    color: '#63CB6C',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
