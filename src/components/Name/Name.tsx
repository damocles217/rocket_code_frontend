import React, { ComponentType } from 'react';
import { NameProps } from '../../../types/form';
import profile from '../../assets/images/profile.jpeg';
import { pressEnterKey } from './name.utils';
import { handleChange } from '../utils/name.utils';
import style from '../sass/Messages.module.scss';

const Name: ComponentType<NameProps> = ({
  form,
  setForm,
  setCheck,
  check,
}: NameProps) => {
  return (
    <section data-testid="name-form" className={style.name}>
      <div className={style.name__img}>
        <img alt="company" src={profile} />
      </div>
      <div
        onKeyDown={e => pressEnterKey(e, form, setCheck, check)}
        className={style.name__form}
        data-testid="name-container"
      >
        <h3>¿Cuál es tu nombre?</h3>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          data-testid="name"
          value={form.name}
          required={true}
          onChange={e => handleChange(e, setForm)}
        />
        <input
          type="text"
          placeholder="Segundo nombre"
          data-testid="secondName"
          name="secondName"
          value={form.secondName}
          onChange={e => handleChange(e, setForm)}
        />
        <input
          type="text"
          placeholder="Apellido paterno"
          data-testid="lastname"
          name="lastname"
          required={true}
          value={form.lastname}
          onChange={e => handleChange(e, setForm)}
        />
        <input
          type="text"
          placeholder="Apellido materno"
          data-testid="secondLastname"
          name="secondLastname"
          value={form.secondLastname}
          onChange={e => handleChange(e, setForm)}
        />
      </div>
    </section>
  );
};

export default Name;
