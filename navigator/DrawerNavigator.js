import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeNavigator from "../screens/DrawerTabScreens/HomeNavigator";
import SettingsNavigator from "../screens/DrawerTabScreens/SettingsNavigator";
import PrivacyNavigator from "../screens/DrawerTabScreens/PrivacyNavigator";
import ProfileNavigator from "../screens/DrawerTabScreens/ProfileNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {Object.entries(props.descriptors).map(([key, descriptor], index) => {
        console.log(descriptor.route.name);
        const focused = index === props.state.index;
        return (
          <DrawerItem
            key={key}
            label={() => (
              <Text
                style={{
                  color: focused ? "lavender" : "black",
                }}
              >
                {descriptor.options.title}
              </Text>
            )}
            onPress={() =>
              descriptor.navigation.navigate(descriptor.route.name)
            }
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          title: "Settings",
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyNavigator}
        options={{
          title: "Privacy",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          title: "Profile",
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
