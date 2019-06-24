/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Layout, Alert, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { tryAgain } from '../../../../store/authentifiction/actions';

const ErrorRequest = ({ tryAgain }) => {
  useEffect(() => {
    setTimeout(() => {
      tryAgain();
    }, 2000);
  });

  return (
    <Layout>
      <Layout.Content>
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
      </Layout.Content>
    </Layout>
  );
};
const mdtp = {
  tryAgain,
};
export default connect(
  null,
  mdtp,
)(ErrorRequest);
