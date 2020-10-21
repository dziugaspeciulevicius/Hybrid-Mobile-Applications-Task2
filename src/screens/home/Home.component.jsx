import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { TouchableOpacity } from "react-native-gesture-handler";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          styles={styles.image}
          source={require("../../../assets/food-recipe-image.png")}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Categories")}
          style={styles.gridItem}
        >
          <Text style={styles.appButtonText}>See recipe categories</Text>
        </TouchableOpacity>
        {/*<TouchableOpacity
          onPress={() => this.props.navigation.navigate("Recipe List")}
          style={styles.gridItem}
        >
          <Text style={styles.appButtonText}>All recipes</Text>
        </TouchableOpacity>*/}
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#c4cdf5',
  },
  gridItem: {
    margin: 15,
    height: 50,
    backgroundColor: "#667EEA",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    width: 280,
    textAlign: "center",
  },
});
