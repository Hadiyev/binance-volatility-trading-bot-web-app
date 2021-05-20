import React, { useState, useEffect } from "react";

import { Row, Col, Card, Statistic, Space, Divider } from "antd";

import Coins from "../data/coins_bought";

export default function CoinsBought() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setCoins(Coins);
  }, []);

  return (
    <div className="container">
      <h1>Coins Bought</h1>
      <Row gutter={[16, 16]}>
        {Object.entries(coins).map((t, k) => (
          <Col key={k} xs={24} sm={12} md={12} lg={6} xl={6}>
            <Card title={t[1].symbol}>
              <Space size="large">
                <Statistic title="Stop Loss" value={t[1].stop_loss} />
                <Statistic title="Take Profit" value={t[1].take_profit} />
              </Space>
              <Divider />
              <p>BOUGHT_AT: {t[1].bought_at} </p>
              <p>VOLUME: {t[1].volume}</p>
              <Space size="large">
                <p>Order ID: {t[1].orderid} </p>
                <p>Time: {new Date(t[1].timestamp).toLocaleDateString()} </p>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
