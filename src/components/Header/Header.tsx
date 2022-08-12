import React, { ComponentType } from 'react';
import clock from '../../assets/SVG/stopwatch.svg';
import clipboard from '../../assets/SVG/clipboard.svg';
import style from './sass/Header.module.scss';

const Header: ComponentType = () => {
  return (
    <header data-testid="header" className={style.header}>
      <div className={style.header__title}>
        <span className={style.title}>Titulo de formulario</span>
        <div className={style.subtitle}>
          <div className={style.subtitle__img}>
            <img src={clock} alt="clock" />
          </div>
          <span>En menos de 5 minutos</span>
        </div>
      </div>
      <div className={style.header__img}>
        <img src={clipboard} alt="clipboard" />
      </div>
    </header>
  );
};

export default Header;
