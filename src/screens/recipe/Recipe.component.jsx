import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class RecipeScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      key: "",
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(newText) {
    this.setState({
      value: newText,
    });
  }
  handleKey(newText) {
    this.setState({
      key: newText,
    });
  }

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("saving error");
    }
  };

  retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      } else {
        console.log("loading error");
      }
    } catch (error) {
      console.log("loading error");
    }
  };

  removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(this.state.key);
    } catch (error) {
      console.log("remove data error");
    }
  };

  saveStorage = () => {
    this.storeData(this.state.key, this.state.value);
  };

  readStorage = () => {
    this.retrieveData(this.state.key).then((result) => {
      alert("Your Comment = " + result);
    });
  };

  removeStorage = () => {
    this.removeData(this.state.key);
    this.state.value="";
  };

  render() {
    const recipe_id = this.props.route.params.recipe_id;
    const category_id = this.props.route.params.category_id;
    const image = this.props.route.params.image;
    const name = this.props.route.params.name;
    const description = this.props.route.params.description;
    const comments = this.props.route.params.comments;

    return (
      <View style={styles.recipeView}>
        <Image style={styles.imageContainer} source={{ uri: image }} />
        <Text style={styles.recipeName}>{name}</Text>
        <Text style={styles.recipeDescription}>{description}</Text>
        <Text style={styles.commnetHeader}>Leave a comment below: </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={this.handleChangeText}
          placeholder="Name"
          // defaultValue={this.state.value}
          // value={this.state.name}
        ></TextInput>
        <TextInput
          style={styles.inputField}
          onChangeText={this.handleChangeText}
          placeholder="Message"
          // defaultValue={this.state.value}
          // value={this.state.text}
        ></TextInput>

        <TouchableOpacity style={styles.addCommentButton}>
          <Text style={styles.commentButtonText}>Add comment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  recipeView: {
    paddingTop: 30,
  },
  imageContainer: {
    width: "50%",
    height: 200,
    resizeMode: "cover",
    alignSelf: "center",
  },
  recipeName: {
    textAlign: "center",
    padding: 30,
    fontSize: 24,
    fontWeight: "700",
    color: "#667EEA",
  },
  recipeDescription: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "#667EEA",
  },
  commnetHeader: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#667EEA",
  },
  inputField: {
    backgroundColor: "#fff",
    paddingTop: 10,
    marginBottom: 10,
    paddingBottom: 5,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
  },
  addCommentButton: {
    margin: 15,
    height: 50,
    backgroundColor: "#667EEA",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
  },
  commentButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    width: 280,
    textAlign: "center",
  },
});

export default RecipeScreen;
