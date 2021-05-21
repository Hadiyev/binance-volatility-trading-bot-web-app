import React from "react";

import { Statistic, Row, Col, Card } from "antd";

const styles = {
  profit: {
    color: "#3f8600",
  },
  loss: {
    color: "#cf1322",
  },
};

export default function Summary() {
  return (
    <div className="container">
      <h1>Summary</h1>{" "}
      <Card>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Total Profit (USD)"
              value={1128}
              valueStyle={"-" === "-" ? styles.profit : styles.loss}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Cumulative (%)"
              value={2}
              suffix="%"
              valueStyle={"-" === "-" ? styles.profit : styles.loss}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
