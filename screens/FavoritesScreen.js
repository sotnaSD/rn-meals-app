import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import  DefaultText  from "../components/DefaultText"
const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  console.log

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText> No Favorite Meals Found. Start adding some! </DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your favorites",
};

const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})


export default FavoritesScreen;
