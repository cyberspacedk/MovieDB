import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 950px;
  margin: 0 auto;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 17%;
  position: relative;
  margin-bottom: 15px;
  h2 {
    font-size: 0.9rem;
    text-align: center;
    background-color: #1d1d1dad;
    padding: 5px;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
  }
`;
const Label = styled.h2`
  display: inline-block;
  background-color: green;
  padding: 5px 10px;
  color: #fff;
`;

const TopFilms = ({ loading, topFilms }) => {
  return (
    <div>
      <Label>Top Week chart </Label>
      <List>
        {loading && <li>...Loading</li>}
        {topFilms.results !== undefined &&
          topFilms.results.map(film => (
            <Item key={film.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                alt="Poster"
              />
              <h2> {film.title} </h2>
            </Item>
          ))}
      </List>
    </div>
  );
};

TopFilms.propTypes = {
  loading: PropTypes.bool.isRequired,
  topFilms: PropTypes.shape.isRequired,
};

export default TopFilms;
