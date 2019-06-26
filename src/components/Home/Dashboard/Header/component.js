import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import Menu from './Menu';

const { Header } = Layout;
const { Text } = Typography;

const PageHeader = () => {
  return (
    <Header>
      <Row type="flex" justify="space-between">
        <Col>
          <Text>THE MOVIE DB</Text>
        </Col>
        <Menu />
      </Row>
    </Header>
  );
};

export default PageHeader;
