import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./Components/Search";

/**
 * Point d'entrée du programme qui return le component Search
 * @returns {*}
 * @constructor
 */
export default function App() {
  return (
    <Search/>
  );
}

/**
 * Style du component
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
