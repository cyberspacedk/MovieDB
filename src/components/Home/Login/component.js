/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Typography } from 'antd';
import { Form, Field } from 'formik';
import FormField from './FormField/component';
import FormButton from './FormButton/component';
import Error from './FailAuth';

const { Content } = Layout;
const { Title } = Typography;

const LoginForm = ({ isFailAuth }) => (
  <div className="center">
    <Layout>
      <Content>
        <Row type="flex" justify="center">
          {isFailAuth ? (
            <Error />
          ) : (
            <Typography>
              <Title>The Movie DB</Title>
              <Form>
                <Field name="username" component={FormField} />
                <Field name="password" component={FormField} />
                <Field component={FormButton} />
              </Form>
            </Typography>
          )}
        </Row>
      </Content>
    </Layout>
  </div>
);

export default LoginForm;
