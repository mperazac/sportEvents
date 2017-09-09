import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookLoginContainer from './components/facebook_login_container';
import EventsSection from './components/events_sections_container';
import Footer from './components/footer';
import './App.css';

const propTypes = {
  isConnected: PropTypes.bool
};

const defaultProps = {
  isConnected: false
};

class App extends Component {
  render() {
    return (
      <div className="App container">
        <FacebookLoginContainer/>
        { this.props.isConnected &&
          <EventsSection/>
        }
        <Footer/>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

function mapStateToProps(state) {
  const { isConnected } = state.facebookLogin;
  return { isConnected };
}

export default connect(mapStateToProps)(App);
