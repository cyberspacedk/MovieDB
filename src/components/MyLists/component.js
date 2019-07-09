import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Typography, Icon, Pagination } from 'antd';
import CreateListFormModal from '../shared/UserAction/CreateListAction/CreateListFormModal';
import Error from '../shared/StatusFields/Error';
import Empty from '../shared/StatusFields/Empty';
import Spinner from '../shared/StatusFields/Spinner';
import ListItem from './ListItem';

const { Content } = Layout;
const { Title } = Typography;

const MyList = ({
  showModal,
  hideModal,
  visibleMod,
  deleteListRequest,
  myLists,
  error,
  loading,
  empty,
  totalResults,
  currentPage,
  goToNextPage,
  history,
}) => {
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
            {error && <Error />}
            {loading ? (
              <Spinner />
            ) : (
              myLists.map(item => (
                <ListItem
                  key={item.id}
                  history={history}
                  item={item}
                  deleteListRequest={deleteListRequest}
                />
              ))
            )}
          </Col>
        </Row>

        {!loading && totalResults > 0 && (
          <Row type="flex" justify="center">
            <Col>
              <Pagination
                defaultCurrent={1}
                current={currentPage}
                total={totalResults}
                className="pagination"
                defaultPageSize={20}
                onChange={goToNextPage}
              />
            </Col>
          </Row>
        )}
        {!loading && empty && <Empty />}
      </Content>
      <CreateListFormModal visibleMod={visibleMod} hideModal={hideModal} />
    </Layout>
  );
};

MyList.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  deleteListRequest: PropTypes.func.isRequired,
  visibleMod: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired,
  totalResults: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  myLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
};
export default MyList;
