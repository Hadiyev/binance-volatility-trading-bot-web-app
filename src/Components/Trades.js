import React, { useState, useEffect } from "react";

import { Row, Col, Card } from "antd";

import tradesRaw from "../data-symlink/trades.txt";
import Trade from "./Trade";

export default function Trades() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetch(tradesRaw)
      .then((r) => r.text())
      .then((text) => {
        setTrades(text.split("\n").reverse().slice(1));
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#ECECEC",
        marginTop: "20px",
        minHeight: "40vh",
      }}
    >
      <div className="container">
        <h1>Trades</h1>
        <Row gutter={[16, 16]}>
          {trades && trades.length == 0 && (
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Card>There is not any trade.</Card>
            </Col>
          )}
          {trades && trades.map((trade) => <Trade trade={trade} />)}
        </Row>
      </div>
    </div>
  );
}
