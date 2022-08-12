import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { MessageType } from '../../../types/message';
import { FormType } from '../../../types/form';

export const pressEnterKey = (
  e: KeyboardEvent<HTMLDivElement>,
  form: FormType,
  setCheck: Dispatch<SetStateAction<Array<MessageType>>>,
  check: Array<MessageType>,
) => {
  if (e.key == 'Enter' && form.name && form.lastname && check.length == 0)
    setCheck(prev => [
      ...prev,
      {
        message: {
          name: form.name,
          secondName: form.secondName,
          lastname: form.lastname,
          secondLastname: form.secondLastname,
        },
        owner: 'user',
      },
      {
        message: { next: 'born' },
        owner: 'company',
      },
    ]);
};

export const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setForm: Dispatch<SetStateAction<FormType>>,
) => {
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
};
