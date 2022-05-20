import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../screens/DrawerTabScreens/HomeNavigator";
import ShopNavigator from "../screens/BottomTabScreens/Shop";
import PaymentNavigator from "../screens/BottomTabScreens/Payment";
import ExploreNavigator from "../screens/BottomTabScreens/Explore";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SettingsNavigator from "../screens/DrawerTabScreens/SettingsNavigator";
import PrivacyNavigator from "../screens/DrawerTabScreens/PrivacyNavigator";
import { routes, screens } from "./ScreenRoutes";

const Tab = createBottomTabNavigator();

const bottomTabOptions = ({ route }) => {
  const item = routes.find((routeItem) => routeItem.name === route.name);
  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "lavender",
        paddingTop: 5,
      },
      title: item.title,
    };
  }

  return {
    title: item.title,
    headerShown: false,
    tabBarIcon: ({ focused }) => item.icon(focused),
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabOptions}>
      <Tab.Screen
        name={screens.HomeNavigator}
        component={HomeNavigator}
        // options={{
        //   tabBarLabel: ({ focused }) => (
        //     <Text style={{ color: focused ? "black" : "#7F8487" }}>Home</Text>
        //   ),
        //   tabBarIcon: ({ size, focused }) => (
        //     <Ionicons
        //       name="ios-home"
        //       size={size}
        //       color={focused ? "black" : "#7F8487"}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name={screens.ShopNavigator}
        component={ShopNavigator}
        // options={{
        //   tabBarLabel: ({ focused }) => (
        //     <Text style={{ color: focused ? "black" : "#7F8487" }}>Shop</Text>
        //   ),
        //   tabBarIcon: ({ size, focused }) => (
        //     <MaterialCommunityIcons
        //       name="shopping-outline"
        //       size={size}
        //       color={focused ? "black" : "#7F8487"}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name={screens.ExploreNavigator}
        component={ExploreNavigator}
        // options={{
        //   tabBarLabel: ({ focused }) => (
        //     <Text style={{ color: focused ? "black" : "#7F8487" }}>
        //       Explore
        //     </Text>
        //   ),
        //   tabBarIcon: ({ size, focused }) => (
        //     <MaterialIcons
        //       name="explore"
        //       size={size}
        //       color={focused ? "black" : "#7F8487"}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name={screens.PaymentNavigator}
        component={PaymentNavigator}
        // options={{
        //   tabBarLabel: ({ focused }) => (
        //     <Text style={{ color: focused ? "black" : "#7F8487" }}>
        //       Payment
        //     </Text>
        //   ),
        //   tabBarIcon: ({ size, focused }) => (
        //     <MaterialIcons
        //       name="payment"
        //       size={size}
        //       color={focused ? "black" : "#7F8487"}
        //     />
        //   ),
        // }}
      />

      {/* drawer routes */}
      <Tab.Screen
        name={screens.SettingsNavigator}
        component={SettingsNavigator}
      />
      <Tab.Screen
        name={screens.PrivacyNavigator}
        component={PrivacyNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
