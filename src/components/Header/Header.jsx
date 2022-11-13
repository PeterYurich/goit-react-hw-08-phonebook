import React from 'react';
import NavbarAuth from '../Auth/AuthMenu';
import { NavLink } from 'react-router-dom';
import { ContactPhone } from '@mui/icons-material';
import { Button } from '@mui/material';

import css from './Header.module.scss';

function Header() {
  return (
    <div className={css.header_container}>
      <div className={css.Header}>
        <div>
          <ContactPhone color="primary" size="large" />
        </div>
        <NavLink className={css.link} to="/contacts">
          <Button>
            My phonebook
          </Button>
        </NavLink>
        <NavbarAuth></NavbarAuth>
      </div>
    </div>
  );
}

export default Header;
