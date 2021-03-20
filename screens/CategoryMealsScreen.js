import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import { useSelector } from "react-redux";


const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals  = useSelector(state => state.meals.filteredMeals);

  const displeyedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return <MealList listData={displeyedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
