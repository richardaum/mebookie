import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import BrandIcon from "../../icons/BrandIcon";
import { IPlace } from "../../services/places";
import { Place } from "../Place";
import { Places } from "../Places";

export type Screens = {
  Places: undefined;
  Place: undefined;
};

const Stack = createStackNavigator<Screens>();

export const Main = () => {
  const [selectedPlace, setSelectedPlace] = useState<IPlace>();
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Places">
          {() => <Places onSelectedPlace={setSelectedPlace} />}
        </Stack.Screen>

        <Stack.Screen name="Place">
          {() => <Place selectedPlace={selectedPlace} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
  },
  logo: {},
});
