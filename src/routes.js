import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/Login";
import Home from "./pages/Home";

function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "",
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "NN - HelpDesk",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#FFF",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
