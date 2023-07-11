import React from 'react';
import './menu.css';

const Menu = () => {
  const menuItems = [
    { text: 'Início', link: '/' },
    { text: 'Filmes em Destaque', link: '/destaques' },
    { text: 'Gêneros', link: '/generos' },
    { text: 'Lançamentos', link: '/lancamentos' },
    { text: 'Filmes Clássicos', link: '/classicos' },
    { text: 'Minha Lista', link: '/lista' },
    { text: 'Sobre Nós', link: '/sobre' },
    { text: 'Contato', link: '/contato' },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.link}>{menuItem.text}</a>
          </li>
        ))}
        <li>
          <form>
            <input type='text' placeholder='Buscar' />
            <button type='submit'>Buscar</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
