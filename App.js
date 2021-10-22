import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/components/navigation/BottomTab";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
