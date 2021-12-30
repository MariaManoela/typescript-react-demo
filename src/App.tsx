import React from 'react';
import './App.css';
import CounterFunction from './components/counterFunction';
import HelloFunctionComponent from './components/helloFunctionComponent';

function App() {
  return (
    <>
      <CounterFunction initialValue={10} />
      <HelloFunctionComponent name = "Manu" age = {21}/>
      <HelloFunctionComponent name = "Fulano"/>
    </>
  );
}

export default App;
