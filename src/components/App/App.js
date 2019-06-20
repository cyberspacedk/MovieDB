import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* import TopFilms from '../TopFilms';
import LoginForm from '../Header'; */
import 'antd/dist/antd.css';
// styles
import GlobalStyle from '../../globalStyles';
import '../../assets/styles/app.scss';
import LoginPage from '../Login/container';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>

      {/*  <LoginForm />
      <TopFilms /> */}
      <GlobalStyle />
    </div>
  );
}

export default App;
