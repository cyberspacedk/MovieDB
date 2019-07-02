import React from 'react';
import PropTypes from 'prop-types';
import { Col, Icon, Card, Typography } from 'antd';

const { Paragraph, Title } = Typography;

const ListItem = ({ item, handleListDetails, handleDeleteModal }) => {
  return (
    <Col
      className="my-list-card"
      xs={{ span: 12 }}
      sm={{ span: 8 }}
      mg={{ span: 6 }}
      lg={{ span: 4 }}
      xl={{ span: 4 }}
    >
      <Card
        hoverable
        className="top-margin"
        actions={[
          <Icon key="delete" type="delete" onClick={handleDeleteModal} />,
        ]}
        onClick={handleListDetails}
      >
        <Title level={4}>{item.name}</Title>
        <Paragraph level={4}>{item.description}</Paragraph>
      </Card>
    </Col>
  );
};

ListItem.propTypes = {
  handleListDetails: PropTypes.func.isRequired,
  handleDeleteModal: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ListItem;
