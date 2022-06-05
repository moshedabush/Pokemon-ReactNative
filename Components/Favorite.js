import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useGlobalState } from '../state';
import DropDownPicker from 'react-native-dropdown-picker';
import { types } from '../data/types';
import Counter from '../Components/Counter';
import { globalStyles } from '../styles/global';

const Favorite = ({ navigation }) => {
  const [favoritePokemons] = useGlobalState('favoritePokemons');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('All');

  return (
    <View style={{ flex: 1 }}>
      <DropDownPicker
        style={styles.optionsFeild}
        open={open}
        value={value}
        items={types}
        setOpen={setOpen}
        setValue={setValue}
      />
      <View style={styles.container}>
        <ScrollView style={styles.pokeWrapper}>
          <View style={styles.container}>
            {favoritePokemons.map((pokemon, index) => {
              if (pokemon.types[0].type.name === value || value === 'All')
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    style={styles.card}
                    onPress={() =>
                      navigation.navigate('Details', {
                        pokemon: pokemon,
                        isFavorite: pokemon.isFavorite,
                        image: pokemon.image
                      })}
                  >
                    <Image
                      style={styles.image}
                      source={{
                        uri: pokemon.image
                      }}
                    />
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={globalStyles.pokeball}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('User Profile')}>
          <Image
            source={require('../assets/pokeball2.png')}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
        <Counter />
      </View>
    </View>
  )
}


export default Favorite;

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
  image: {
    width: 70,
    height: 70,
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
  optionsFeild: {
    borderRadius: 10,
  },
});