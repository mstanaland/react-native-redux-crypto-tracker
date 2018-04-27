import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from "react-native";

import FetchCoinData from "../Actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CryptoContainer extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.FetchCoinData(), 3000);
  }

  renderCoinCards() {
    const { crypto } = this.props;

    return crypto.data.map((coin, index) => (
      <CoinCard
        key={coin.symbol}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_7d={coin.percent_change_7d}
        percent_change_24h={coin.percent_change_24h}
      />
    ));
  }

  render() {
    const { crypto } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>{crypto.isFetching}</Text>
        {crypto.isFetching && <ActivityIndicator size="large" />}
        {!crypto.isFetching && this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
});

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
