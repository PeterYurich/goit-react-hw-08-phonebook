import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
import { Navigate } from 'react-router-dom';

import css from '../../components/styles.module.scss';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';


const SignupForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const authData = useSelector(selectAuth)

  const controlInput = evt => {
    const { name, value } = evt.target;

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
    dispatch(signup({ name, email, password }));
    setName('')
    setEmail('')
    setPassword('')
  };

  
  if (authData.isLoggedIn) {
    return <Navigate to="/contacts" />
  } 

  return (
    <div className="container">
      <h1>REGISTRATION:</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Nickname
          <input type="name"
           name="name" 
           onChange={controlInput} 
           value={name}/>
        </label>
        <label className={css.label}>
          Email
          <input type="email" 
          name="email"
           onChange={controlInput} 
           value={email}/>
        </label>
        <label className={css.label}>
          Password
          <input type="passwword"
           name="password" 
           onChange={controlInput} 
           value={password}/>
        </label>
        <button type="submit" className={css.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};


export default SignupForm