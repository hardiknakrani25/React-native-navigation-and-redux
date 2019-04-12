import React, { Component } from "react";
import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          We have {this.props.screenProps.currentFriends.length} friends!
        </Text>
        <Button
          title="Add Friends"
          onPress={() => this.props.navigation.navigate("Friend")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
