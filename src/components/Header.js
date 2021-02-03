import React from 'react';
import style from '../styles/Header.module.css';

const Header = () => (
  <header className={style.header_container}>
    <h1 className={style.header_text}>Ты сегодня покормил кота?</h1>
  </header>
);

export default Header;
