import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import s from '../styles/nav.module.css'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <h1>Waves</h1>
      <button>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;