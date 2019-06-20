import React from 'react';
import { Layout, Row, Typography } from 'antd';
import { Form, Field } from 'formik';
import FormField from './FormField/component';
import FormButton from './FormButton/component';

const { Content } = Layout;
const { Title } = Typography;

const LoginForm = () => (
  <div className="center">
    <Layout>
      <Content>
        <Row type="flex" justify="center">
          <Typography>
            <Title>The Movie DB</Title>
            <Form>
              <Field name="username" component={FormField} />
              <Field name="password" component={FormField} />
              <Field component={FormButton} />
            </Form>
          </Typography>
        </Row>
      </Content>
    </Layout>
  </div>
);

export default LoginForm;
