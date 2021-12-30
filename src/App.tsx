import React from 'react';
import './App.css';
import CounterFunction from './components/counterFunction';
import HelloFunctionComponent from './components/helloFunctionComponent';
import NameInput from './components/NameInput';

function App() {
  return (
    <>
      <CounterFunction initialValue={10} />
      <HelloFunctionComponent name = "Manu" age = {21}/>
      <HelloFunctionComponent name = "Fulano"/>
      <NameInput/>
    </>
  );
}

export default App;
