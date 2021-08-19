import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ( {componentItem, deleteItem} ) => {
  return (
    <TouchableOpacity style = {styles.listItem}>
      <View style = {styles.listItemView}>
          <Text styles = {styles.listItemText}>{componentItem.text}</Text>
          <Icon name="remove" size={20} color='firebrick' onPress={() => deleteItem(componentItem.id)} />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  listItem: {
    padding: 15, 
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 7,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 20
  }
});

export default ListItem;