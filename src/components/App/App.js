import React from 'react';
import TopFilms from '../TopFilms';
import LoginForm from '../Header';
import 'antd/dist/antd.css';

// styles
import GlobalStyle from '../../globalStyles';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <TopFilms />
      <GlobalStyle />
    </div>
  );
}

export default App;
