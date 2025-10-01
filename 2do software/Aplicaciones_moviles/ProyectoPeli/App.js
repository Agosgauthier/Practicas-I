import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicio" 
          component={HomeScreen} 
          options={{ title: "Película Principal" }}
        />
        <Stack.Screen 
          name="Detalle" 
          component={DetailScreen} 
          options={{ title: "Detalle de la Película" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}