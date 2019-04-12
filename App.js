/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";

import AppNavigator from "./App/Navigation/navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: ["Akshay", "Abhay", "Akhil"],
      currentFriends: []
    };
  }

  addFriend = index => {
    const { possibleFriends, currentFriends } = this.state;
    const addedFriends = possibleFriends.splice(index, 1);
    currentFriends.push(addedFriends);

    this.setState({ possibleFriends, currentFriends });
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.addFriend
        }}
      />
    );
  }
}
