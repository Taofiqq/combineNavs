import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "../screens/DrawerTabScreens/HomeNavigator";
import SettingsNavigator from "../screens/DrawerTabScreens/SettingsNavigator";
import PrivacyNavigator from "../screens/DrawerTabScreens/PrivacyNavigator";
import ProfileNavigator from "../screens/DrawerTabScreens/ProfileNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="Privacy" component={PrivacyNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
