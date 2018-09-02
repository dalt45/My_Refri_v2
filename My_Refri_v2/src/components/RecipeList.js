import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeListComponent from './RecipeListComponent';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wholeList: {
    height: 100,
    width,
    backgroundColor: 'white',
  },
});

class RecipeList extends Component {
  render() {
    return (
      <RecipeListComponent />
    );
  }
}

export default RecipeList;
