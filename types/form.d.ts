import { Dispatch, SetStateAction } from 'react';
import { MessageType } from './message';

export interface FormType {
  name: string;
  secondName?: string;
  lastname: string;
  secondLastname?: string;
  bornDate: string;
  email: string;
  phone: string;
}

export interface NameProps {
  form: FormType;
  setForm: Dispatch<SetStateAction<FormType>>;
  setCheck: Dispatch<SetStateAction<Array<MessageType>>>;
  check: Array<MessageType>;
}
