import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Crytocurrency App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 55,
    alignItems: "center"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});
