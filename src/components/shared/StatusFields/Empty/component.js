import React from 'react';
import { Layout, Empty } from 'antd';

const EmptyResult = () => (
  <Layout>
    <Layout.Content>
      <div className="top-margin">
        <Empty
          description="No movies found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    </Layout.Content>
  </Layout>
);

export default EmptyResult;
