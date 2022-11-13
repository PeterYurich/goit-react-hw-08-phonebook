import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts, visibleContacts } from 'redux/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';

import css from './ContactList.module.scss';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Typography } from '@mui/material';

import { ThreeDots } from 'react-loader-spinner';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const toRender = useSelector(visibleContacts);

  return (
    <ul>
      {contacts.isLoading && <ThreeDots></ThreeDots>}
      {contacts.error && <div>oops! a mistake is happend. Try again!</div>}
      {toRender.map(person => {
        return (
          <li className={css.contact} key={person.id}>
            <Typography
              sx={{
                width: '300px',
              }}
            >
              {person.name}: {person.number}
            </Typography>
            <IconButton
              sx={{visibility: 'none' }}
              aria-label="delete"
              size="small"
              onClick={() => handleDelete(person.id)}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </li>
        );
      })
    }
    </ul>
  );
};
export default ContactList;
