import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";
import axios from "axios";

class CategoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/dziugaspeciulevicius/hma-task2-api/recipes"
      )
      .then((res) => {
        const Data = res.data;
        console.log(Data);
        this.setState({
          data: Data,
        });
      });
  };

  render() {
    const renderRecipeItem = (itemData) => {
      return (
        <View style={styles.screen}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Recipe List", {
                category_id: itemData.item.category_id,
                category: itemData.item.category,
                recipes: itemData.item.recipes,
              })
            }
            style={styles.gridItem}
          >
            <Text style={styles.appButtonText}>{itemData.item.category}</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          // key={renderRecipeItem}
          renderItem={renderRecipeItem}
          keyExtractor={(item, index) => item.category.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 250,
    backgroundColor: '#c4cdf5',
  },
  screen: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems: 'center',
    justifyContent: "center",
    alignContent: "center",
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 50,
    backgroundColor: "#667EEA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonContainer: {
    borderRadius: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default CategoryScreen;
