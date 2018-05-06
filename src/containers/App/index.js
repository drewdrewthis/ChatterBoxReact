import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/logo.svg';
import { connect } from './selectors';
import Todos from '../Todos';
import styles from './app.module.scss';
import './App.css';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <p>{props.filter}</p>
    </header>
    <Todos className={styles.todo} />
  </div>
);

App.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default connect(App);
