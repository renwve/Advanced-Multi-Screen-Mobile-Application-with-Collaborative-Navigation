import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          borderRadius: 35,
          marginHorizontal: 20,
          marginBottom: 20,
          position: "absolute",
          backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: isDark ? "#ffffff" : "#000000",
        tabBarInactiveTintColor: isDark ? "#888" : "#000000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="alpha-w-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="shopping-bag"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="dm"
        options={{
          title: "DM",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="paper-plane-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ellipsis-horizontal"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="dm/newdm"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}