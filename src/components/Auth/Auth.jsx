import { NavLink } from 'react-router-dom';
import css from './Auth.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuth } from 'redux/selectors';
import { logout } from 'redux/auth/authOperations';
// import { fetchContacts } from 'redux/contacts/contactsOperations';

export default function NavbarAuth() {
  const authData = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(authData.token));
    // dispatch(fetchContacts())
    // dispatch({
    //   type: 'contacts/fetchAll/rejected',
    //   payload: {
    //     items: [],
    //     isLoading: false,
    //     error: null,
    //   },
    // });
  };

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
        <div>
          <p>Hallo, {authData.user.name}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
}