import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Appbar, List } from "react-native-paper";
import BrandIcon from "../../icons/BrandIcon";
import { usePlaces } from "../../services/places";

export const Main = () => {
  const { places } = usePlaces();

  return (
    <>
      <StatusBar animated style="light" />

      <SafeAreaView>
        <Appbar.Header style={styles.header}>
          <BrandIcon style={styles.logo} height={32} width="100%" />
        </Appbar.Header>

        <FlatList
          data={places}
          renderItem={(e) => (
            <List.Item title={e.item.name} onPress={() => {}} />
          )}
        />
      </SafeAreaView>
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
