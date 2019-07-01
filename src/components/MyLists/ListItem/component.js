import React from 'react';
import PropTypes from 'prop-types';
import { Col, Icon, Card, Modal, Typography } from 'antd';

const { Paragraph, Title } = Typography;

const ListItem = ({ item, handleListDetails, deleteListRequest }) => {
  const showDeleteModal = e => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete this list?',
      onOk() {
        deleteListRequest(item.id);
      },
      onCancel() {},
    });
  };

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
          <Icon key="delete" type="delete" onClick={showDeleteModal} />,
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
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleListDetails: PropTypes.func.isRequired,
  deleteListRequest: PropTypes.func.isRequired,
};

export default ListItem;
