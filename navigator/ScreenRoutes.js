import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const screens = {
  HomeTabs: "HomeTabs",
  Home: "Home",
  HomeNavigator: "HomeNavigator",
  Shop: "Shop",
  ShopNavigator: "ShopNavigator",
  Explore: "Explore",
  ExploreNavigator: "ExploreNavigator",
  Payment: "Payment",
  PaymentNavigator: "PaymentNavigator",
  Settings: "Settings",
  SettingsNavigator: "SettingsNavigator",
  Privacy: "Privacy",
  PrivacyNavigator: "PrivacyNavigator",
};

export const routes = [
  {
    name: screens.HomeTabs,
    focusedRoute: screens.HomeTabs,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Ionicons
        name="ios-home"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.HomeNavigator,
    focusedRoute: screens.HomeNavigator,
    title: "Home",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Ionicons
        name="ios-home"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeNav,
    title: "Home",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Ionicons
        name="ios-home"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.Shop,
    focusedRoute: screens.ShopNavigator,
    title: "Shop",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <MaterialCommunityIcons
        name="shopping-outline"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.ShopNavigator,
    focusedRoute: screens.ShopNavigator,
    title: "Shop",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <MaterialCommunityIcons
        name="shopping-outline"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.Explore,
    focusedRoute: screens.ExploreNavigator,
    title: "Explore",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <MaterialIcons
        name="explore"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.ExploreNavigator,
    focusedRoute: screens.ExploreNavigator,
    title: "Explore",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <MaterialIcons
        name="explore"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.Payment,
    focusedRoute: screens.PaymentNavigator,
    title: "Payment",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <MaterialIcons
        name="payment"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.PaymentNavigator,
    focusedRoute: screens.PaymentNavigator,
    title: "Payment",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <MaterialIcons
        name="payment"
        size={24}
        color={focused ? "black" : "#7F8487"}
      />
    ),
  },
  {
    name: screens.Settings,
    focusedRoute: screens.SettingsNavigator,
    title: "Settings",
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.SettingsNavigator,
    focusedRoute: screens.SettingsNavigator,
    title: "Settings",
    showInTab: false,
    showInDrawer: true,
  },
  {
    name: screens.Privacy,
    focusedRoute: screens.PrivacyNavigator,
    title: "Privacy",
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.PrivacyNavigator,
    focusedRoute: screens.PrivacyNavigator,
    title: "Privacy",
    showInTab: false,
    showInDrawer: true,
  },
];
