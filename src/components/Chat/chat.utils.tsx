import { Dispatch, FormEvent, SetStateAction } from 'react';
import { FormType, ReceivedForm, SendForm } from '../../../types/form';

export const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  form: FormType,
  setData: Dispatch<SetStateAction<ReceivedForm>>,
) => {
  e.preventDefault();

  try {
    const sendData: SendForm = {
      name: form.name,
      secondName: form.secondName,
      lastname: form.lastname,
      secondLastname: form.secondLastname,
      bornDate: `${form.day} ${form.mounth} ${form.year}`,
      email: form.email,
      phone: form.phone,
    };

    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    });

    const data: ReceivedForm = await response.json();
    setData(data);
  } catch (e) {
    console.log(e);
  }
};
