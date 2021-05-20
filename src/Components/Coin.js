import React from "react";

import { Card, Statistic, Space, Divider } from "antd";

export default function Coin(props) {
  return (
    <Card title={props.coin[1].symbol}>
      <Space size="large">
        <Statistic title="Stop Loss" value={props.coin[1].stop_loss} />
        <Statistic title="Take Profit" value={props.coin[1].take_profit} />
      </Space>
      <Divider />
      <p>BOUGHT_AT: {props.coin[1].bought_at} </p>
      <p>VOLUME: {props.coin[1].volume}</p>
      <Space size="large">
        <p>Order ID: {props.coin[1].orderid} </p>
        <p>Time: {new Date(props.coin[1].timestamp).toLocaleDateString()} </p>
      </Space>
    </Card>
  );
}
