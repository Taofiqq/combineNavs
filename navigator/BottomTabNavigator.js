import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../screens/DrawerTabScreens/HomeNavigator";
import ShopNavigator from "../screens/BottomTabScreens/Shop";
import PaymentNavigator from "../screens/BottomTabScreens/Payment";
import ExploreNavigator from "../screens/BottomTabScreens/Explore";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Shop" component={ShopNavigator} />
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name="Payment" component={PaymentNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
