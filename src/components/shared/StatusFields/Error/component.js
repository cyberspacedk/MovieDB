import React from 'react';
import { Layout, Alert, Row, Col } from 'antd';

const { Content } = Layout;

const Error = () => (
  <Layout>
    <Content>
      <Row type="flex" justify="center">
        <Col span={10}>
          <Alert
            message="OMG"
            description="Hey dude smth went wrong. Try again later"
            type="error"
            showIcon
          />
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Error;
