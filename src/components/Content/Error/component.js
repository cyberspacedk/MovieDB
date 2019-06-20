import React from 'react';
import { Layout, Alert } from 'antd';

const ErrorRequest = () => (
  <Layout>
    <Layout.Content>
      <div className="top-margin">
        <Alert
          message="OMG"
          description="Hey dude smth went wrong. Try again later"
          type="error"
          showIcon
        />
      </div>
    </Layout.Content>
  </Layout>
);

export default ErrorRequest;
