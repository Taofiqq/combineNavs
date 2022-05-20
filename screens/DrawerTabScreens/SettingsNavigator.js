import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Settings = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
