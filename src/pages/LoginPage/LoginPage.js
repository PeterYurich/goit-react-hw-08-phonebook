import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

import css from '../../components/styles.module.scss'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authData = useSelector(selectAuth)

  const inputController = evt => {
    const { name, value } = evt.target;

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
    dispatch(login({ email, password }));
    setEmail('')
    setPassword('')
  };

  if (authData.isLoggedIn) {
    return <Navigate to="/contacts" />
  }

  return (
    <div className='container'>
      <h1>AUTHORISATION:</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Email
          <input type="email"
            name="email"
            onChange={inputController}
            value={email} 
            />
        </label>
        <label className={css.label}>
          Password
          <input type="passwword"
            name="password"
            onChange={inputController}
            value={password} />
        </label>
        <button type="submit" className={css.button}>Log In</button>
      </form>
    </div>
  );
};


export default LoginForm