import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

class App extends Component { 

  currentUserObj = () => this.props.users.filter(user => user.id === this.props.current_user)[0];

  render() {
  return (
    <Router>
    <div className="App">
      <Navbar user={this.currentUserObj()} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/users/:username" component={UserPage} />
    </div>
    </Router>
  )}
}

const mapStateToProps = (state) => { return { users: state.users, current_user: state.user_id } }

export default connect(mapStateToProps)(App);