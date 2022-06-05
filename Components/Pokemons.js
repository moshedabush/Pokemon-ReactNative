import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useGlobalState } from '../state/index';
import { globalStyles } from '../styles/global';
import Counter from '../Components/Counter';

const Pokemons = ({ navigation }) => {
  const userName = useGlobalState('userName');
  const [firstEntrance, setEntrance] = useGlobalState('firstEntrance');
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  const getNumber = num => {
    num = num.toString();
    const paddednum = num.padStart(3, '0');
    return paddednum;
  };

  if (firstEntrance) {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchField}
            placeholder="Search Pokemons"
            onChangeText={value => (setSearchField(value), setEntrance(false))}
            value={searchField}
          />
          <Text style={styles.title}>We choose you {userName[0]}!
           </Text>
        </View>
      </View>
    )
  } else
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchField}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchField(value)}
            value={searchField}
          />
          {searchField.length > 1 ?
            pokemons.sort().filter(pokemon =>
              pokemon.name.toLowerCase().startsWith(searchField.toLowerCase())
            )
              .map((pokemon, index) => {
                return (
                  <TouchableOpacity style={styles.searchOptions}
                    key={index}
                    onPress={() => setSearchField(pokemon.name)}
                  >
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                )
              })
            : null}
        </View>
        <TouchableOpacity
          style={globalStyles.pokeball}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('User Profile')}>
          <Image
            source={require('../assets/pokeball2.png')}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
        <ScrollView style={styles.pokeWrapper}>
          <View style={styles.container}>
            {pokemons.filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchField.toLowerCase())
            )
              .map((pokemon, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    style={styles.card}
                    onPress={() =>
                      navigation.navigate('Details', {
                        pokemon: pokemon,
                        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                          index + 1,
                        )}.png`,
                      })
                    }>
                    <Image
                      style={styles.image}
                      source={{
                        uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                          index + 1,
                        )}.png`,
                      }}
                    />
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
        <Counter/>
      </View>
    );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 75,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 200,
    textAlign: 'center',
  },
  pokeWrapper: {
    marginHorizontal: 7,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 1,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 30,
  },
  searchField: {
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  searchOptions: {
    borderWidth: 0.2,
    backgroundColor: '#EDEFF2',
    textAlign: 'center',
    width: 230,
    marginStart: 10,
    marginBottom: 1,
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
});
