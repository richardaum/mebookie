import "./fake-api";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Main } from "./pages/Main";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3D085A",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
