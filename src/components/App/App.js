import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/* import TopFilms from '../TopFilms';
import LoginForm from '../Header'; */
import 'antd/dist/antd.css';
// styles
import GlobalStyle from '../../globalStyles';
import '../../assets/styles/app.scss';
import Home from '../Home';
import AboutFilm from '../AboutFilm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={AboutFilm} />
        <Redirect to="/" />
      </Switch>

      <GlobalStyle />
    </div>
  );
}

export default App;
