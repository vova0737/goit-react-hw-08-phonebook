import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import operations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';

const ContactList = ({ contacts, onDelete, clearFilter }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
          <button
            className={styles.btn}
            onClick={() => {
              onDelete(id, clearFilter());
            }}
            aria-label="Удалить контакт"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  contacts: selectors.getFilteredContactsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: id => dispatch(operations.deleteContact(id)),
  clearFilter: () => dispatch(changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);