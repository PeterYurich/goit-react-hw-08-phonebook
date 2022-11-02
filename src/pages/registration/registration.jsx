import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'auth/authOperations';

import css from '../../components/styles.module.scss'

export const RegistrationForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const controlInput = evt => {
    const { name, value } = evt.target;
    console.log(name, value);

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(evt.target.value);
    dispatch(register({ name, email, password}));
  };

  return (
    <form onSubmit={handleSubmit} className = {css.form}>
        REGISTRATION:
      <label className={css.label}>
        Nickname
        <input type="name" name="name" onChange={controlInput} />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" onChange={controlInput} />
      </label>
      <label className={css.label}>
        Password
        <input type="passwword" name="password" onChange={controlInput} />
      </label>
      <button type="submit" className={css.button}>Sign Up</button>
    </form>
  );
};
