import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

class RecipeList extends Component {
  render() {
    const category_id = this.props.route.params.category_id;
    const category = this.props.route.params.category;
    const recipes = this.props.route.params.recipes;

    const renderGridItem = (itemData) => {
      return (
        <TouchableOpacity style={styles.CardTouch}
        onPress={() =>
            this.props.navigation.navigate("Recipe Screen", {
              category_id: itemData.item.recipes.category_id,
              recipe_id: itemData.item.recipes.recipe_id,
              image: itemData.item.recipes.image,
              name: itemData.item.recipes.name,
              description: itemData.item.recipes.description,
            })
          }>
          <View style={styles.recipeCard}>
            <Image
              style={styles.imageContainer}
              source={{ uri: itemData.item.image }}
            />
            <Text style={styles.recipeName}>{itemData.item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.screen}>
        <Text style={styles.categoryTitle}> Category: {category} </Text>
        <FlatList
          data={recipes}
            // numColumns={2}
          renderItem={renderGridItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 20,
    textAlign: "center",
  },
  CardTouch: {
    paddingBottom: 20,
  },
  recipeCard: {
    borderWidth: 3,
    borderColor: "#667EEA",
    borderRadius: 30,
    paddingTop: 10,
    width: "90%",
    // textAlign: "center",
    // alignContent: 'center',
    alignSelf: 'center',
  },
  recipeName: {
    textAlign: "center",
    paddingBottom: 20,
  },
  imageContainer: {
    width: "55%",
    height: 200,
    resizeMode: "cover",
    alignSelf: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
  },
});

export default RecipeList;
