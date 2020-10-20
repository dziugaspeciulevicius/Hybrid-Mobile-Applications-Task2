import React, { Component } from "react";
import { StyleSheet, Text, Image } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

class RecipeScreen extends Component {
  render() {
    const category_id = this.props.route.params.recipes.category_id;
    const recipe_id = this.props.route.params.recipes.recipe_id;
    const image = this.props.route.params.recipes.image;
    const name = this.props.route.params.recipes.name;
    const description = this.props.route.params.recipes.description;

    return <Text></Text>;
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  cardText: {
    padding: 10,
    fontSize: 16,
  },
});

export default RecipeScreen;
