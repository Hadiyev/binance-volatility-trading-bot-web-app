import React from "react";

import { Col, Card, Statistic, Space } from "antd";

export default function Trade(props) {
  if (props.trade.split(" ")[2][0] === "B") {
    return (
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card
          title={
            <Statistic
              title={props.trade.split(" ")[2]}
              value={props.trade.split(" ")[5]}
            />
          }
          extra={
            props.trade.split(" ").slice(1, 2) +
            ", " +
            props.trade.split(" ").slice(0, 1)
          }
        >
          <Space size="large">
            <Statistic
              title="Bought at (USD)"
              value={props.trade.split(" ")[7]}
            />
            <Statistic title="Volume" value={props.trade.split(" ")[4]} />
          </Space>
        </Card>
      </Col>
    );
  } else {
    return (
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card
          title={
            <Statistic
              title={props.trade.split(" ")[2].slice(0, 4)}
              value={props.trade.split(" ")[4]}
            />
          }
          extra={
            props.trade.split(" ").slice(1, 2) +
            ", " +
            props.trade.split(" ").slice(0, 1)
          }
        >
          <Space size="large">
            {props.trade.split(" ")[11][0] === "-" ? (
              <Space size="large">
                <Statistic
                  title="Profit (%)"
                  value={props.trade.split(" ")[11]}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                />
                <Statistic
                  title="Profit (USD)"
                  value={props.trade.split(" ")[10]}
                  valueStyle={{ color: "#cf1322" }}
                />
              </Space>
            ) : (
              <Space size="large">
                <Statistic
                  title="Profit (%)"
                  value={props.trade.split(" ")[11]}
                  valueStyle={{ color: "#3f8600" }}
                />
                <Statistic
                  title="Profit (USD)"
                  value={props.trade.split(" ")[10]}
                  valueStyle={{ color: "#3f8600" }}
                />
              </Space>
            )}

            <Statistic
              title="Bought at (USD)"
              value={props.trade.split(" ")[6]}
            />
            <Statistic
              title="Sold at (USD)"
              value={props.trade.split(" ")[8]}
            />
            <Statistic title="Volume" value={props.trade.split(" ")[3]} />
          </Space>
        </Card>
      </Col>
    );
  }
}
