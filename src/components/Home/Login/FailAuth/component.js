import React from 'react';
import { Layout, Alert, Row, Col } from 'antd';

const FailAuth = () => (
  <Layout>
    <Layout.Content>
      <Row type="flex" justify="center">
        <Col span={10}>
          <Alert
            message="ACCESS DENIED. "
            description="Failed authentification. Hey dude, try again.  "
            type="error"
            showIcon
          />
        </Col>
      </Row>
    </Layout.Content>
  </Layout>
);

export default FailAuth;
