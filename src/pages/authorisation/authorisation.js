import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'auth/authOperations';

import css from '../../components/styles.module.scss'

export const AuthorisationForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const controlInput = evt => {
    const { name, value } = evt.target;
    console.log(name, value);

    switch (name) {
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
    dispatch(logIn({ email, password}));
  };

  return (
    <form onSubmit={handleSubmit} className = {css.form}>
        AUTHORISATION:
      <label className={css.label}>
        Email
        <input type="email" name="email" onChange={controlInput} />
      </label>
      <label className={css.label}>
        Password
        <input type="passwword" name="password" onChange={controlInput} />
      </label>
      <button type="submit" className={css.button}>Sign In</button>
    </form>
  );
};
