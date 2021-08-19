import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';

const App = () => {
  const [items, setItems] = useState( [
    {id: uuidv4(), text: 'Get Milk'}, 
    {id: uuidv4(), text: 'Register for school'},
    {id: uuidv4(), text: 'Read book'},
  ] );

  const deleteItem = (id) => {
    setItems( prevItems => 
      {
        return prevItems.filter(item => item.id != id)
      } );
  }

  const addItem = (itemText) => {
    if (!itemText) { /* if there is no text */
      Alert.alert('Error', 'Please enter an item');
    }
    else {
      setItems( prevItems => 
        {
          return [{id: uuidv4(), text: itemText}, ...prevItems]
        } );
    }
  }

  return (
    <View style = {styles.container}>
      <Header title='To Do List' />
      <AddItem addItem = {addItem} />
      <FlatList data={items} renderItem={ ({item}) => 
          (<ListItem componentItem = {item} deleteItem = {deleteItem} />) } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 10,
  }
});

export default App;
