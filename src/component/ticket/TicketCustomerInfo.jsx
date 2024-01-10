import React from "react";
import { Button, Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const onFinish = (values) => {
  console.log(values);
};

export const TicketCustomerInfo = () => {
  const [form] = Form.useForm();

  const checkConfirmEmail = (_, value) => {
    const emailFieldValue = form.getFieldValue(["user", "email"]);

    if (value && value !== emailFieldValue) {
      return Promise.reject("Confirm Email does not match Email");
    }

    return Promise.resolve();
  };

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        form={form}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item>
            <h1>Customer's Information</h1>
        </Form.Item>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "confirmEmail"]}
          label="Confirm Email"
          rules={[
            {
              type: "email",
              required: true,
              validator: checkConfirmEmail,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phoneNumber"]}
          label="Phone Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};