import React from "react";
import { Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeNavigator from "../screens/DrawerTabScreens/HomeNavigator";
import SettingsNavigator from "../screens/DrawerTabScreens/SettingsNavigator";
import PrivacyNavigator from "../screens/DrawerTabScreens/PrivacyNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { routes, screens } from "./ScreenRoutes";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {routes
        .filter((route) => route.showInDrawer)
        .map((route, index) => {
          return (
            <DrawerItem
              key={index}
              label={() => (
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
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
      screenOptions={{
        drawerType: "front",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={screens.HomeTabs}
        component={BottomTabNavigator}
        options={{
          title: "Home",
        }}
      />
      {/* <Drawer.Screen
        name="SettingsNavigator"
        component={SettingsNavigator}
        options={{
          title: "Settings",
        }}
      />
      <Drawer.Screen
        name="PrivacyNavigator"
        component={PrivacyNavigator}
        options={{
          title: "Privacy",
        }}
      /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
