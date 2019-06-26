import React from 'react';
import { Layout, Row, Col, Spin } from 'antd';

const { Content } = Layout;

const Spinner = () => (
  <Layout>
    <Content>
      <div className="top-margin">
        <Row type="flex" justify="center">
          <Col>
            <Spin />
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default Spinner;
