import React from 'react';
import TopFilms from '../TopFilms';
import LoginForm from '../LoginForm';
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
