import css from './AuthMenu.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuth } from 'redux/selectors';
import { logout } from 'redux/auth/authOperations';

import { Button } from '@mui/material';
import {Typography} from '@mui/material';

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
          <Button className={css.authLink} to="/signup">
            Sign up
          </Button>
          <Button className={css.authLink} to="/login">
            Log in
          </Button>
        </div>
      ) : (
        <div className={css.logedUser}>
          <Typography className={css.helloing}>
            Hallo, {authData.user.name}
          </Typography>
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      )}
    </div>
  );
}
