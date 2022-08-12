import React, { ComponentType } from 'react';
import { NameProps } from '../../../types/form';
import profile from '../../assets/images/profile.jpeg';
import style from '../sass/Messages.module.scss';
import { handleChange } from '../utils/name.utils';
import { pressEnterKey } from './born.utils';

const Born: ComponentType<NameProps> = ({
  form,
  setForm,
  setCheck,
  check,
}: NameProps) => {
  return (
    <section data-testid="born-form" className={style.name}>
      <div className={style.name__img}>
        <img alt="company" src={profile} />
      </div>
      <div
        onKeyDown={e => pressEnterKey(e, form, setCheck, check)}
        className={style.name__form}
        data-testid="born-container"
      >
        <h3>¿Cuál es tu fecha de nacimiento?</h3>
        <input
          type="text"
          placeholder="Día"
          name="day"
          data-testid="day"
          value={form.day}
          required={true}
          onChange={e => handleChange(e, setForm)}
        />
        <input
          type="text"
          placeholder="Mes"
          data-testid="mounth"
          name="mounth"
          value={form.mounth}
          onChange={e => handleChange(e, setForm)}
        />
        <input
          type="text"
          placeholder="Año"
          data-testid="year"
          name="year"
          value={form.year}
          onChange={e => handleChange(e, setForm)}
        />
      </div>
    </section>
  );
};

export default Born;
