import React from 'react';
import NavbarAuth from '../Auth/AuthMenu';
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
        <div>
          <Button
            // style = {{
            //   transition: "transform 900ms cubic-bezier(0.4, 0, 0.2, 1)",
            //   hover: {
            //       transform: "scale(1.03)",
            //   }
            // }}
            className={css.link}
            href="/contacts"
          >
            My phonebook
          </Button>
        </div>
        <NavbarAuth></NavbarAuth>
      </div>
    </div>
  );
}

export default Header;
