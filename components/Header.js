import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.text}>{props.title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 75, 
    padding: 15, 
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Header;