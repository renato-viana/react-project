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
}

const TableBody = props => {
    const rows = props.authors.map((author, index) => {
        return (
            <tr key={index}>
                <td>{author.nome}</td>
                <td>{author.livro}</td>
                <td>{author.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {

    render() {

        const { authors } = this.props;
        console.log(authors);
        return (
            <table>
                <TableHead />
                <TableBody authors={authors} />
            </table>

        );
    };
}

export default Table;