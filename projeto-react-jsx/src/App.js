import React from 'react';

import Titulo from './components/Titulo';
import Contador from './components/Contador';

import './App.css';

function App() {
  return (
    <div className="App">
      <Titulo textColor='green'>
        Primeiro seção
      </Titulo>

      <Titulo textColor='red'>
        Segunda seção
      </Titulo>

      <Contador inicio={10} tempo={200} />
      <Contador inicio={100} tempo={550} />
    </div>
  );
}

export default App;
