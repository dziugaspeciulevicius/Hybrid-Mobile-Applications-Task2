import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { FlatList } from "react-native-gesture-handler";

class RecipeScreen extends Component {
  // state = {
  // name: "",
  // text: "",
  // key: "",
  // };
  constructor() {
    super();
    this.state = {
      // to get values from input
      name: "",
      text: "",
      key: "",
      // to set the value on text
      getName: '',
      getText: '',
      getKey: '',
    };
    // this.handleChangeText = this.handleChangeText.bind(this);
  }

  // function to save the value in AsyncStorage
  saveValueFunction = () => {
    // to check the input if not empty
    if(this.state.name && this.state.text) {
      // setting a data to a AsyncStorage with respect to a key
      AsyncStorage.setItem(this.state.key, this.state.name && this.state.text)
      // resetting inputes
      this.setState({ name: '', text: '', key: ''})
      // alert to confirm
      alert('Data saved');
    } else {
      // alert for the empty input
      alert('please fill data')
    }
  };

  // handleChangeName(newName){
  //   this.setState(
  //     {
  //       name: newName
  //     }
  //   )
  // }

  // handleChangeText(newText){
  //   this.setState(
  //     {
  //       text: newText
  //     }
  //   )
  // }

  // handleKey(newKey) {
  //   this.setState(
  //     {
  //       key: newKey
  //     }
  //   )
  // }

  // storeComment = async (name, text, key) => {
  //   try {
  //     await AsyncStorage.setItem(
  //       name, text, key
  //     );
  //   } catch (error){
  //     console.log('\n\n\n------------------------saving error------------------------\n\n\n')
  //     console.log(error)
  //   } finally {
  //     console.log('finally');
  //   }
  // }

  // retrieveComments = async () => {
  //   try {
  //     const name = await AsyncStorage.getItem(key);
  //     const text = await AsyncStorage.getItem(key);
  //   }
  // }
  

  render() {
    const recipe_id = this.props.route.params.recipe_id;
    const category_id = this.props.route.params.category_id;
    const image = this.props.route.params.image;
    const name = this.props.route.params.name;
    const description = this.props.route.params.description;
    const comments = this.props.route.params.comments;

    const renderCommentItem = (itemData) => {
      return (
        <View style={styles.commentCard}>
          <Text style={styles.userName}> Name: {itemData.item.name}</Text>
          <Text style={styles.userComment}> Comment: {itemData.item.text}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => console.log(comments, "\n\ndelete comment")}
          >
            <Text style={styles.deleteButtonText}> Delete comment</Text>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <ScrollView style={styles.recipeView}>
        <Image style={styles.imageContainer} source={{ uri: image }} />
        <Text style={styles.recipeName}>{name}</Text>
        <Text style={styles.recipeDescription}>{description}</Text>
        <Text style={styles.commentHeader}>Leave a comment below: </Text>
        <TextInput style={styles.inputField} placeholder="Name"></TextInput>
        <TextInput style={styles.inputField} placeholder="Message"></TextInput>
        <TouchableOpacity
          style={styles.addCommentButton}
          onPress={this.saveValueFunction}
        >
          <Text style={styles.commentButtonText}>Add comment</Text>
        </TouchableOpacity>
        <Text style={styles.commentHeader}>Comments: </Text>
        <FlatList
          style={styles.commentsList}
          data={comments}
          renderItem={renderCommentItem}
          keyExtractor={(item, index) => item.name}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  recipeView: {
    paddingTop: 30,
    flex: 1,
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
  commentHeader: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#667EEA",
  },
  inputField: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
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
  commentCard: {
    borderWidth: 3,
    borderColor: "#667EEA",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,

    width: "90%",
    // textAlign: "center",
    // alignContent: 'center',
    alignSelf: "center",
    backgroundColor: "#fafafc",
  },
  deleteButton: {
    backgroundColor: "red",
    width: "40%",
    alignContent: "center",
    textAlign: "center",
    marginTop: 10,
    borderRadius: 30,
  },
  deleteButtonText: {
    alignSelf: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
  commentsList: {
    paddingBottom: 50,
  },
});

export default RecipeScreen;
