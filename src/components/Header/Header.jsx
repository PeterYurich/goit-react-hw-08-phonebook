import React from 'react';
import  NavbarAuth  from '../Auth/Auth';
import {  Link} from 'react-router-dom';

import css from "./Header.module.scss"

 function Header() {
  return (
    <div className={css.header_container}>
        <div className={css.Header}>
            <Link to="/contacts">PHONEBOOK</Link>
            <NavbarAuth></NavbarAuth>
        </div>
    </div>
  )
}

export default Header