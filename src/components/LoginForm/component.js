/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import {
  REQUEST_TOKEN_PATH,
  GET_SESSION_ID_LOGIN_PATH,
  GET_SESSION_ID_PATH,
  DELETE_SESSION_ID_PATH,
} from '../../api/api';
import 'antd/dist/antd.css';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.refreshToken(REQUEST_TOKEN_PATH);

    this.props.form.validateFields((err, values) => {
      const { username, password } = values;
      const request_token = JSON.parse(localStorage.getItem('REQUEST_TOKEN'));

      this.props.auth(
        GET_SESSION_ID_LOGIN_PATH,
        username,
        password,
        request_token,
        GET_SESSION_ID_PATH,
      );
    });
  };

  handleLogout = e => {
    // e.preventDefault();
    const SID = JSON.parse(localStorage.getItem('SESSION_ID'));
    this.props.logout(DELETE_SESSION_ID_PATH, SID);
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched('username') && getFieldError('username');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');

    const { isAuth } = this.props;
    console.log(isAuth);
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        {!isAuth ? (
          <>
            <Form.Item
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />,
              )}
            </Form.Item>

            <Form.Item
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Log in
              </Button>
            </Form.Item>
          </>
        ) : (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleLogout}
            >
              Log out
            </Button>
          </Form.Item>
        )}
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(
  HorizontalLoginForm,
);

export default WrappedHorizontalLoginForm;
