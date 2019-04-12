import React, { Component } from "react";
import { SafeAreaView, Button, View, Text, StyleSheet } from "react-native";

export default class Friend extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.screenProps.possibleFriends.map((friend, index) => (
          <Button
            key={friend}
            title={`Add ${friend}`}
            onPress={() => this.props.screenProps.addFriend(index)}
          />
        ))}
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
