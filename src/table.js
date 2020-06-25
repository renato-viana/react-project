import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.authors.map((author, index) => {
    return (
      <tr key={index}>
        <td>{author.name}</td>
        <td>{author.book}</td>
        <td>{author.price}</td>
        <td>
          <button onClick={ () => { props.removeAuthor(index) } }>Remover</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { authors, removeAuthor } = this.props;
    return (
      <table>
        <TableHead />
        <TableBody authors={authors} removeAuthor={removeAuthor} />
      </table>
    );
  }
}

export default Table;
