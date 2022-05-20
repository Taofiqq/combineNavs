import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
