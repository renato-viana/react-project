import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Table from './table';
import Form from './Form';

class App extends Component {
  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000',
      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99',
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '150',
      },
      {
        name: 'Ana',
        book: 'Front-end',
        price: '180',
      },
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100',
      },
    ],
  };

  removeAuthor = (index) => {
    const { authors } = this.state;

    this.setState({
      authors: authors.filter((author, currentIndex) => {
        return currentIndex !== index;
      }),
    });
  };

  addAuthor = (author) => {
    console.log('teste:' + author.name);
    this.setState({ authors: [...this.state.authors, author] });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Table
            authors={this.state.authors}
            removeAuthor={this.removeAuthor}
          />
          <Form addAuthor={this.addAuthor} />
        </div>
      </Fragment>
    );
  }
}

export default App;
