import React, { ComponentType } from 'react';
import { NameProps } from '../../../types/form';
import profile from '../../assets/images/profile.jpeg';
import { pressEnterKey } from './contact.utils';
import { handleChange } from '../utils/name.utils';
import style from '../sass/Messages.module.scss';

const Contact: ComponentType<NameProps> = ({
  form,
  setForm,
  setCheck,
  check,
}: NameProps) => {
  return (
    <section data-testid="contact-form" className={style.name}>
      <div className={style.name__img}>
        <img alt="company" src={profile} />
      </div>
      <div
        onKeyDown={e => pressEnterKey(e, form, setCheck, check)}
        className={style.name__form}
      >
        <h3>Datos de contacto</h3>
        <input
          type="mail"
          placeholder="Correo Electronico"
          name="email"
          data-testid="email"
          value={form.email}
          required={true}
          onChange={e => handleChange(e, setForm)}
        />
        <input
          type="tel"
          placeholder="Celular"
          data-testid="phone"
          name="phone"
          required={true}
          value={form.phone}
          onChange={e => handleChange(e, setForm)}
        />
      </div>
    </section>
  );
};

export default Contact;
