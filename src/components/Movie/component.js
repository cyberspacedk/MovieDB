/* eslint-disable no-unused-expressions */
/* eslint-disable radix */
/* eslint-disable react/prop-types */

import React from 'react';
import {
  Layout,
  Row,
  Col,
  Carousel,
  Typography,
  Tag,
  Card,
  BackTop,
} from 'antd';
import Spinner from '../shared/StatusFields/Spinner';
import Error from '../shared/StatusFields/Error';
import { getFilmDuration, transformNumbers } from '../../helpers/helpers';
import CreateListAction from '../shared/UserAction/CreateListAction';
import FavoriteAction from '../shared/UserAction/FavoriteAction';
import WatchListAction from '../shared/UserAction/WatchListAction';

const AboutFilm = props => {
  const { isError, isLoading, aboutFilm, images, casts, crew, genres } = props;

  const posters = (images && images.slice(0, 3)) || [];

  return (
    <Layout>
      {isError && <Error />}
      {isLoading ? (
        <Spinner />
      ) : (
        <Layout.Content>
          <Row type="flex">
            <Col span={24}>
              <Carousel>
                {images &&
                  posters.map(img => (
                    <div key={img.file_path}>
                      <img
                        className="movie-image"
                        src={`https://image.tmdb.org/t/p/original${
                          img.file_path
                        }`}
                        alt="Poster"
                      />
                    </div>
                  ))}
              </Carousel>
            </Col>
          </Row>
          <div className="top-margin">
            <Row>
              <Col span={20} offset={2}>
                <Typography.Title level={1}>
                  {aboutFilm.title}
                  <CreateListAction />
                  <FavoriteAction movieId={aboutFilm.id} />
                  <WatchListAction movieId={aboutFilm.id} />
                </Typography.Title>
                <Typography.Title level={3}>Overview</Typography.Title>
                <Typography.Paragraph>
                  {aboutFilm.overview}
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <span className="accent-movie">Original Language : </span>
                  {aboutFilm.lang === 'en' ? 'English' : 'Europian'}
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <span className="accent-movie">Runtime :</span>
                  {aboutFilm.runtime && getFilmDuration(aboutFilm.runtime)}
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <span className="accent-movie">Budget :</span>
                  {aboutFilm.budget && transformNumbers(aboutFilm.budget)}
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <span className="accent-movie">Revenue :</span>
                  {aboutFilm.revenue && transformNumbers(aboutFilm.revenue)}
                </Typography.Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Typography.Paragraph>
                  <span className="accent-movie">Genres :</span>
                  {genres &&
                    genres.map(genre => (
                      <Tag key={genre.id}>{genre.name.toUpperCase()}</Tag>
                    ))}
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={10} offset={2} className="top-margin">
                <Typography.Title level={3}>
                  <span className="accent-movie">Casts</span>
                </Typography.Title>
              </Col>
            </Row>
            <Row gutter={8} type="flex">
              <Col span={20} offset={2}>
                {casts &&
                  casts.map(person => (
                    <Col
                      key={person.cast_id}
                      xs={{ span: 12 }}
                      sm={{ span: 8 }}
                      md={{ span: 6 }}
                      lg={{ span: 4 }}
                      xl={{ span: 4 }}
                    >
                      <Card
                        className="casts-card"
                        cover={
                          <img
                            className="person-image"
                            alt="Person"
                            src={`https://image.tmdb.org/t/p/w200${
                              person.profile_path
                            }`}
                          />
                        }
                      >
                        <Card.Meta
                          title={person.name}
                          description={person.character}
                        />
                      </Card>
                    </Col>
                  ))}
              </Col>
            </Row>
            <Row>
              <Col span={10} offset={2} className="top-margin">
                <Typography.Title level={3}>
                  <span className="accent-movie">Crew</span>
                </Typography.Title>
              </Col>
            </Row>
            <Row gutter={8} type="flex">
              <Col span={20} offset={2}>
                {crew &&
                  crew.map(person => (
                    <Col
                      key={person.credit_id}
                      xs={{ span: 12 }}
                      sm={{ span: 8 }}
                      md={{ span: 6 }}
                      lg={{ span: 4 }}
                      xl={{ span: 4 }}
                    >
                      <Card
                        className="casts-card"
                        cover={
                          <img
                            className="person-image"
                            alt="Person"
                            src={`https://image.tmdb.org/t/p/w200${
                              person.profile_path
                            }`}
                          />
                        }
                      >
                        <Card.Meta
                          title={person.name}
                          description={person.department}
                        />
                      </Card>
                    </Col>
                  ))}
              </Col>
            </Row>
          </div>
        </Layout.Content>
      )}
      <BackTop />
    </Layout>
  );
};

export default AboutFilm;
