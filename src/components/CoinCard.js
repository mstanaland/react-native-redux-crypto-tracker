import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { images } from "../Utils/CoinIcons";

export default function CoinCard(props) {
  const {
    symbol,
    coin_name,
    price_usd,
    percent_change_24h,
    percent_change_7d
  } = props;

  return (
    <View>
      <Image source={{ uri: images[symbol] }} style={styles.image} />
      <Text>{symbol}</Text>
      <Text>{coin_name}</Text>
      <Text>
        {price_usd}
        <Text style={styles.bold}>$</Text>
      </Text>
      <Text>Change past 24 hours: {percent_change_24h}</Text>
      <Text>Change past 7 days: {percent_change_7d}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: "bold"
  }
});
