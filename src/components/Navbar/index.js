import React from 'react';

import './style.css';

const Navbar = () => {
  return (
    <>
      <h1>SachielCode</h1>
      <nav>
        <ul>
          <li>
            {' '}
            <a href='#'>Acerca de mi</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Expriencia</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Proyectos Personales</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Info extra</a>{' '}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
