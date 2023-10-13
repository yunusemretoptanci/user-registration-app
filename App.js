import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AuthStackNavigator from "./navigation/authNavigatior";
export default function App() {
  return (
    <View>
      <AuthStackNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
