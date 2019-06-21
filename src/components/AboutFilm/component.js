/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, Row, Col, Carousel } from 'antd';
import Header from '../Header';

const AboutFilm = props => {
  const { isError, isLoading, aboutFilm, images, casts, crew, genres } = props;

  const posters = (images && images.slice(0, 3)) || [];

  return (
    <Layout>
      <Header />

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
      </Layout.Content>
    </Layout>
  );
};

export default AboutFilm;
