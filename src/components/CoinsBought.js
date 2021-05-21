import React, { useState, useEffect } from "react";

import { Row, Col, Card } from "antd";

import Coins from "../data/signals/coins_bought";
import Coin from "./Coin";

export default function CoinsBought() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setCoins(Coins);
  }, []);

  return (
    <div className="container">
      <h1>Coins Bought</h1>
      <Row gutter={[16, 16]}>
        {Object.entries(coins) && Object.entries(coins).length === 0 && (
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card>There is not any coins bought right now.</Card>
          </Col>
        )}
        {Object.entries(coins).map((coin, k) => (
          <Col key={k} xs={24} sm={12} md={12} lg={6} xl={6}>
            <Coin coin={coin} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
