import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../screens/DrawerTabScreens/HomeNavigator";
import ShopNavigator from "../screens/BottomTabScreens/Shop";
import PaymentNavigator from "../screens/BottomTabScreens/Payment";
import ExploreNavigator from "../screens/BottomTabScreens/Explore";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "lavender",
          paddingTop: 5,
        },
        initialRouteName: "Home",
      }}
    >
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>Home</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-home"
              size={size}
              color={focused ? "black" : "#7F8487"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>Shop</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color={focused ? "black" : "#7F8487"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>
              Explore
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="explore"
              size={24}
              color={focused ? "black" : "#7F8487"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>
              Payment
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="payment"
              size={24}
              color={focused ? "black" : "#7F8487"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
