import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

class RegisterView extends Component {
  static propTypes = {
    error: PropTypes.string,
    isLoadingAuth: PropTypes.bool,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className="Title">Enter your data</h1>

        <form onSubmit={this.handleSubmit} className="Form" autoComplete="off">
          <label htmlFor="name" className="Label">
            Name
          </label>
          <input
            className="Input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label htmlFor="email" className="Label">
            Email
          </label>
          <input
            className="Input"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="password" className="Label">
            Password
          </label>
          <input
            className="Input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <button className="Button" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
  isLoadingAuth: authSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
