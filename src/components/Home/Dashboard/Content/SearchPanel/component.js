import React from 'react';
import { Form, Field } from 'formik';
import { Layout, Row, Col } from 'antd';
import SearchField from './SearchField/component';

const SearchPanel = () => (
  <Layout.Content>
    <Row type="flex">
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 18, offset: 3 }}
        lg={{ span: 16, offset: 4 }}
        xl={{ span: 14, offset: 5 }}
      >
        <Form>
          <Field name="search" component={SearchField} />
        </Form>
      </Col>
    </Row>
  </Layout.Content>
);

export default SearchPanel;
