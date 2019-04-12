import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import friendReducer from "./FriendReducer";

const store = createStore(friendReducer);

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
      <Provider store={store}>
        <AppNavigator
          screenProps={{
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend
          }}
        />
      </Provider>
    );
  }
}
