import React from 'react';

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-2">
        <a href="/logo" className="brand-logo">
          Books.com
        </a>
        <ul className="right">
          <li>
            <a href="/authors">Autores</a>
          </li>
          <li>
            <a href="/books">Livros</a>
          </li>
          <li>
            <a href="/info">Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
