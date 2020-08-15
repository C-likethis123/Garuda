import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import t from 'tcomb-form-native';

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar barStyle="light-content" backgroundColor="black" />
       <MyStack />
    </NavigationContainer>
  );
};

export default App;
