import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';

const Filter = ({ value, onChangeFilter, contacts }) => {
  return (
    <form className={styles.form}>
      <label>
        <span className={styles.title}>Search by name</span>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatsh) => ({
  onChangeFilter: (e) =>
    dispatsh(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
