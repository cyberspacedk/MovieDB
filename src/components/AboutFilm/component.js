/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, Row, Col, Carousel } from 'antd';
import Header from '../Header';

const AboutFilm = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Row type="flex">
          <Col span={24}>{/* <Carousel autoplay>sfsdfs</Carousel> */}</Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default AboutFilm;
