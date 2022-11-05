import { NavLink } from 'react-router-dom';
import css from './Auth.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuth } from 'redux/selectors';
import { logout } from 'redux/auth/authOperations';

export default function NavbarAuth() {
  const authData = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(authData.token));
    dispatch('contacts/fetchContacts/rejected');
  }

  return (
    <div className={css.auth}>
      {!authData.isLoggedIn ? (
        <div>
          <NavLink className={css.authLink} to="/signup">
            Sign up
          </NavLink>
          <NavLink className={css.authLink} to="/login">
            Log in
          </NavLink>
        </div>
      ) : (
        <button onClick={handleLogout}>Log out</button>
      )}
    </div>
  );
}
