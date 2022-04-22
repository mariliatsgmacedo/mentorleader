import React from 'react';
import { Login } from './pages/Login';
import { initializeApp } from 'firebase/app';
import { config } from "../src/config/config";
import { GeneralRoutes } from './routes/route';

initializeApp(config.firebase);

function App() {
 
  return <>
    <GeneralRoutes/>
  </>;
}

export default App;
