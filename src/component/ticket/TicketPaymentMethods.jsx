import React from "react";
import { Radio } from "antd";

export default function TicketPaymentMethods() {
  return (
    <div>
      <h1>Payment Methods</h1>
      <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
      </Radio.Group>
    </div>
  );
}
