import React, { Component } from 'react';
import './App.css';
import Table from './table';

class App extends Component {

  state = {
    authors: [
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
    ]
  };

  removeAuthor = (index) => {

    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, currentIndex) => {
        return currentIndex !== index;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Table authors={this.state.authors} removeAuthor={this.removeAuthor}/>
      </div>
    );

  }
}

export default App;
