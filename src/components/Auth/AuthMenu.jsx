import css from './AuthMenu.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectAuth } from 'redux/selectors';
import { logout } from 'redux/auth/authOperations';

import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export default function NavbarAuth() {
  const authData = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(authData.token));
    dispatch({
      type: 'contacts/fetchAll/rejected',
      payload: {
        items: [],
        isLoading: false,
        error: null,
      },
    });
  };

  return (
    <div className={css.auth}>
      {!authData.isLoggedIn ? (
        <div className={css.auth}>
          <Link className={css.authLink} to="/signup">
            <Button>Sign up</Button>
          </Link>
          <Link className={css.authLink} to="/login">
            <Button>Log in</Button>
          </Link>
        </div>
      ) : (
        <div className={css.logedUser}>
          <Typography className={css.helloing}>
            Hallo, {authData.user.name}
          </Typography>
          <Button onClick={handleLogout} className={css.authLink}>Log out</Button>
        </div>
      )}
    </div>
  );
}
