import React, { useState, useEffect } from "react";

import { Row, Col, Card, Statistic, Space, Divider } from "antd";

export default function Trades() {
  return (
    <div style={{ backgroundColor: "#ECECEC" }}>
      <div className="container">
        <h1>Trades</h1>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card title="BOUGHT SOME COIN">
              <p>Volume, Price, Time</p>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card title="SOLD SOME COIN">
              <Space size="large">
                <Statistic
                  title="Profit (%)"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  suffix="%"
                />
                <Statistic
                  title="Profit (USD)"
                  value={2.05}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  suffix="USD"
                />
                <Statistic
                  title="Bought at"
                  value={11.28}
                  precision={4}
                  suffix="USD"
                />
                <Statistic
                  title="Sold at"
                  value={12.28}
                  precision={4}
                  suffix="USD"
                />
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
