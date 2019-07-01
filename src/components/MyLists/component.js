/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Card, Typography, Modal, Icon } from 'antd';
import CreateListFormModal from '../shared/UserAction/CreateListAction/CreateListFormModal';
import Error from '../shared/StatusFields/Error';
import Empty from '../shared/StatusFields/Empty';
import Spinner from '../shared/StatusFields/Spinner';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { confirm } = Modal;

const MyList = ({
  showModal,
  hideModal,
  visibleMod,
  getCreatedListRequest,
  deleteListRequest,
  myLists,
  error,
  loading,
  totalPages,
  history,
}) => {
  const showDeleteModal = id => {
    confirm({
      title: 'Do you want to delete this list?',
      onOk() {
        deleteListRequest(id);
      },
      onCancel() {},
    });
  };
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={20} offset={2}>
            <div className="top-margin">
              <Title level={1}>
                My Lists
                <Icon type="plus-circle" onClick={showModal} />
              </Title>
            </div>
          </Col>
        </Row>
        <Row type="flex" gutter={8}>
          <Col span={20} offset={2}>
            {loading ? (
              <Spinner />
            ) : totalPages ? (
              myLists.map(item => (
                <Col
                  className="my-list-card"
                  key={item.id}
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
                      <Icon
                        key="delete"
                        type="delete"
                        onClick={() => showDeleteModal(item.id)}
                      />,
                    ]}
                    onClick={() => history.push(`/lists/${item.id}`)}
                  >
                    <Title level={4}>{item.name}</Title>
                    <Paragraph level={4}>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))
            ) : (
              <Empty />
            )}
          </Col>
        </Row>
      </Content>
      <CreateListFormModal visibleMod={visibleMod} hideModal={hideModal} />
    </Layout>
  );
};

MyList.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  visibleMod: PropTypes.bool.isRequired,
};
export default MyList;
