/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const Forma = ({ handleInputValue, handleSubmitForm }) => (
  <Form layout="inline" onSubmit={handleSubmitForm}>
    <Form.Item>
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Username"
        name="username"
        onChange={handleInputValue}
      />
    </Form.Item>

    <Form.Item>
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInputValue}
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Log in
      </Button>
    </Form.Item>
  </Form>
);

export default Forma;
