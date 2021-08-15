import React, { VFC } from "react";
import { Text, View } from "react-native";
import { IPlace } from "../../services/places";
import { Header } from "../../components/Header";

export const Place: VFC<{ selectedPlace?: IPlace }> = ({ selectedPlace }) => {
  return (
    <View>
      <Header />

      <Text>{JSON.stringify(selectedPlace)}</Text>
    </View>
  );
};
