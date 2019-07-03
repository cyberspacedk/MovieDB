import React from 'react';
import PropTypes from 'prop-types';
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
import { getFilmDuration, transformNumbers } from '../../helpers';
import CreateListAction from '../shared/UserAction/CreateListAction';
import FavoriteAction from '../shared/UserAction/FavoriteAction';
import WatchListAction from '../shared/UserAction/WatchListAction';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Movie = ({ error, loading, aboutFilm, casts, crew, genres, posters }) => {
  return (
    <Layout>
      {error && <Error />}
      {loading ? (
        <Spinner />
      ) : (
        <Content>
          <Row type="flex">
            <Col span={24}>
              <Carousel>
                {posters &&
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
                <Title level={1}>
                  {aboutFilm.title}
                  <CreateListAction movieId={aboutFilm.id} />
                  <FavoriteAction movieId={aboutFilm.id} />
                  <WatchListAction movieId={aboutFilm.id} />
                </Title>
                <Title level={3}>Overview</Title>
                <Paragraph>{aboutFilm.overview}</Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={20} offset={2}>
                <Paragraph>
                  <span className="accent-movie">Original Language : </span>
                  {aboutFilm.lang === 'en' ? 'English' : 'Europian'}
                </Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Paragraph>
                  <span className="accent-movie">Runtime :</span>
                  {aboutFilm.runtime && getFilmDuration(aboutFilm.runtime)}
                </Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Paragraph>
                  <span className="accent-movie">Budget :</span>
                  {aboutFilm.budget && transformNumbers(aboutFilm.budget)}
                </Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Paragraph>
                  <span className="accent-movie">Revenue :</span>
                  {aboutFilm.revenue && transformNumbers(aboutFilm.revenue)}
                </Paragraph>
              </Col>
              <Col span={20} offset={2}>
                <Paragraph>
                  <span className="accent-movie">Genres :</span>
                  {genres &&
                    genres.map(genre => (
                      <Tag key={genre.id}>{genre.name.toUpperCase()}</Tag>
                    ))}
                </Paragraph>
              </Col>
            </Row>
            <Row>
              <Col span={10} offset={2} className="top-margin">
                <Title level={3}>
                  <span className="accent-movie">Casts</span>
                </Title>
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
                        <Meta
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
                <Title level={3}>
                  <span className="accent-movie">Crew</span>
                </Title>
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
                        <Meta
                          title={person.name}
                          description={person.department}
                        />
                      </Card>
                    </Col>
                  ))}
              </Col>
            </Row>
          </div>
        </Content>
      )}
      <BackTop />
    </Layout>
  );
};

Movie.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  aboutFilm: PropTypes.shape({
    id: PropTypes.number,
    overview: PropTypes.string,
    lang: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
  }).isRequired,
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    }),
  ).isRequired,
  crew: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.string,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      department: PropTypes.string,
    }),
  ).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  posters: PropTypes.arrayOf(
    PropTypes.shape({
      file_path: PropTypes.string,
    }),
  ).isRequired,
};

export default Movie;
