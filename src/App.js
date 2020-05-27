import React from 'react';
import './App.css';
import Table from './table';

function App() {
  const authors = [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Ana',
      livro: 'Front-end',
      preco: '180'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }
  ];
  return (
    <div className="App">
      <Table authors = { authors }/>
    </div>
  );
}

export default App;
