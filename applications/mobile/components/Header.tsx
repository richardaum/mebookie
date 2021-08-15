import { Appbar } from "react-native-paper";
import BrandIcon from "../icons/BrandIcon";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

export const Header = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <BrandIcon height={32} width="100%" />
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
  },
});
