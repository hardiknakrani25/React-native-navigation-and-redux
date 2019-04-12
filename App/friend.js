import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.friends.possible.map((friend, index) => (
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
      </View>
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

const mapStateToProps = state => {
  const { friends } = state;
  return { friends };
};

export default connect(mapStateToProps)(Friends);
