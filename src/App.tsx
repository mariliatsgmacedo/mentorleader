import React from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { IndexRoutes } from './routes';

Modal.setAppElement('#root');

function App() {
  return <>
    <IndexRoutes />
    <GlobalStyle />
  </>;
}

export default App;
