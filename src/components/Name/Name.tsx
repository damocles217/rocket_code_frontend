import React, { ComponentType } from 'react';
import profile from '../../assets/images/profile.jpeg';
import style from './sass/Name.module.scss';

const Name: ComponentType = () => {
  return (
    <section className={style.name}>
      <div className={style.name__img}>
        <img alt="company" src={profile} />
      </div>
      <div
        onKeyDown={e => console.log(e.key == 'Enter')}
        className={style.name__form}
      >
        <h3>¿Cuál es tu nombre?</h3>
        <input type="text" placeholder="Nombre" name="name" required />
        <input type="text" placeholder="Segundo nombre" name="secondName" />
        <input
          type="text"
          placeholder="Apellido paterno"
          name="lastname"
          required
        />
        <input
          type="text"
          placeholder="Apellido materno"
          name="secondLastname"
        />
      </div>
    </section>
  );
};

export default Name;
