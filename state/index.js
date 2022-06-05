import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const initalState = {
    favoritePokemons: [],
    firstEntrance: true,
    userName: '',
    favoriteCount:0
};
const { useGlobalState } = createGlobalState(initalState);

export { useGlobalState };