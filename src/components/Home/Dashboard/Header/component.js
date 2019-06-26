/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import Menu from './Menu';

const Header = () => {
  return (
    <Layout.Header>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Text>THE MOVIE DB</Typography.Text>
        </Col>
        <Menu />
      </Row>
    </Layout.Header>
  );
};

export default Header;
