import React from 'react';
import { initializeApp } from 'firebase/app';
import { config } from "../src/config/config";
import { GeneralRoutes } from './routes/route';
import { GlobalStyle } from './styles/global';

initializeApp(config.firebase);

function App() {
 
  return <>
    <GeneralRoutes/>
    <GlobalStyle/>
  </>;
}

export default App;
