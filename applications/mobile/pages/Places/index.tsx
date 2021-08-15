import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, View } from "react-native";
import { List, Appbar } from "react-native-paper";
import { IPlace, usePlaces } from "../../services/places";
import { Screens } from "../Main";
import { Header } from "../../components/Header";

type NavigationProps = StackNavigationProp<Screens, "Places">;

export const Places: React.VFC<{ onSelectedPlace: (place: IPlace) => void }> =
  ({ onSelectedPlace }) => {
    const { places } = usePlaces();

    const navigation = useNavigation<NavigationProps>();

    return (
      <View>
        <Header />

        <FlatList
          data={places}
          renderItem={(e) => (
            <List.Item
              title={e.item.name}
              onPress={() => {
                onSelectedPlace(e.item);
                navigation.navigate("Place");
              }}
            />
          )}
        />
      </View>
    );
  };
