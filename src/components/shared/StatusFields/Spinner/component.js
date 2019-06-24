import React from 'react';
import { Layout, Row, Col, Spin } from 'antd';

const Spinner = () => (
  <Layout>
    <Layout.Content>
      <div className="top-margin">
        <Row type="flex" justify="center">
          <Col>
            <Spin />
          </Col>
        </Row>
      </div>
    </Layout.Content>
  </Layout>
);

export default Spinner;
