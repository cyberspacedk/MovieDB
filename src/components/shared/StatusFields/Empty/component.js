import React from 'react';
import { Layout, Empty } from 'antd';

const { Content } = Layout;

const EmptyResult = () => (
  <Layout>
    <Content>
      <div className="top-margin">
        <Empty
          description="No movies found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    </Content>
  </Layout>
);

export default EmptyResult;
