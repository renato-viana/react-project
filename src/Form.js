import React, { Component } from 'react';
import './App.css'

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
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="nome">
              Nome
            </label>
            <input
              className="validate"
              id="nome"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputValue}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="livro">
              Livro
            </label>
            <input
              className="validate"
              id="livro"
              type="text"
              name="book"
              value={book}
              onChange={this.handleInputValue}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="preco">
              Preço
            </label>
            <input
              className="validate"
              id="preco"
              type="text"
              name="price"
              value={price}
              onChange={this.handleInputValue}
            />
          </div>

          <button
            onClick={this.handleSubmitForm}
            type="button"
            className="waves-effect waves-light blue lighten-2 btn mb-10"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}
