import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import IngredientList from './IngredientList';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <IngredientList />
    );
  }
}

export default AddIngredients;
