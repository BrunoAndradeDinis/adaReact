import React from 'react';
import { Header } from './components/Header/Header';
import {StatsCard} from './components/StatsCard/StatsCard'


import "./styles/global.css";
import { Tasks } from './components/Tasks/Tasks';


function App() {
  return (
    <>
     <Header/>
     <Tasks/> 
    </>
  );
}

export default App;
