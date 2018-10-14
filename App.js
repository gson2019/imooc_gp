/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image, View } from "react-native";
import TabNavigator from "react-native-tab-navigator";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === "home"}
            title="Mine"
            selectedTitleStyle={{ color: "green" }}
            renderIcon={() => (
              <Image
                style={[styles.image, { tintColor: "green" }]}
                source={require("./res/images/ic_my.png")}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: "red" }]}
                source={require("./res/images/ic_my.png")}
              />
            )}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: "home" })}
          >
            <View style={styles.page1} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === "trending"}
            title="Trending"
            selectedTitleStyle={{ color: "blue" }}
            renderIcon={() => (
              <Image
                style={[styles.image, { tintColor: "red" }]}
                source={require("./res/images/ic_trending.png")}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: "yellow" }]}
                source={require("./res/images/ic_trending.png")}
              />
            )}
            //renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: "trending" })}
          >
            <View style={styles.page2} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === "popular"}
            title="Popular"
            selectedTitleStyle={{ color: "red" }}
            renderIcon={() => (
              <Image
                style={[styles.image, { tintColor: "green" }]}
                source={require("./res/images/ic_popular.png")}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: "red" }]}
                source={require("./res/images/ic_popular.png")}
              />
            )}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: "popular" })}
          >
            <View style={styles.page3} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === "favorite"}
            title="Favorite"
            selectedTitleStyle={{ color: "red" }}
            renderIcon={() => (
              <Image
                style={[styles.image, { tintColor: "green" }]}
                source={require("./res/images/ic_favorite.png")}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={[styles.image, { tintColor: "red" }]}
                source={require("./res/images/ic_favorite.png")}
              />
            )}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: "favorite" })}
          >
            <View style={styles.page4} />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  page1: {
    flex: 1,
    backgroundColor: "red"
  },
  page2: {
    flex: 1,
    backgroundColor: "yellow"
  },
  page3: {
    flex: 1,
    backgroundColor: "green"
  },
  page4: {
    flex: 1,
    backgroundColor: "purple"
  },
  image: {
    height: 22,
    width: 22
  }
});
