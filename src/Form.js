import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      book: '',
      price: '',
    };

    this.state = this.initialState;
  }

  handleInputValue = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = () => {
    this.props.addAuthor(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, book, price } = this.state;
    console.log(name, book, price);
    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputValue}
        />

        <label htmlFor="livro">Livro</label>
        <input
          id="livro"
          type="text"
          name="book"
          value={book}
          onChange={this.handleInputValue}
        />

        <label htmlFor="preco">Preço</label>
        <input
          id="preco"
          type="text"
          name="price"
          value={price}
          onChange={this.handleInputValue}
        />

        <button onClick={this.handleSubmitForm} type="button">
          Salvar
        </button>
      </form>
    );
  }
}
