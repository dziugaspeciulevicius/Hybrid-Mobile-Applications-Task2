import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/home/Home.component";
import CategoryScreen from "./src/screens/categories/Category.component";
import RecipeList from "./src/screens/recipeList/RecipeList.component";
import RecipeScreen from "./src/screens/recipe/Recipe.component";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*Initial route (main route that gets loaded first)*/}
      <Drawer.Navigator initialRouteName="Home" headerMode="none">
      {/* Routes for react-native (open navigator to change routes)*/}
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Categories" component={CategoryScreen} />
        <Drawer.Screen name="Recipe List" component={RecipeList} />
        <Drawer.Screen name="Recipe Screen" component={RecipeScreen} />
  </Drawer.Navigator>
    </NavigationContainer>
  );
}
