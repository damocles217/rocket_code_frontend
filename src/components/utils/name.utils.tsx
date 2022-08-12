import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FormType } from '../../../types/form';

export const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setForm: Dispatch<SetStateAction<FormType>>,
) => {
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
};
