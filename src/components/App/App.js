import React from 'react';
import 'antd/dist/antd.css';
// styles
import GlobalStyle from '../../globalStyles';
import '../../assets/styles/app.scss';
import Home from '../Home';

function App() {
  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
