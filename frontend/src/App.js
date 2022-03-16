import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { fetchBlips } from './actions/blipActions'
import { fetchUsers } from './actions/userActions'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'
import Footer from './components/Footer'

// TESTING SOMETHING //
import { fetchUserBlips } from './actions/blipActions'
///////////////////////

class App extends Component { 

  componentDidMount() {
    this.props.fetchUsers();
    // TESTING SOMETHING //
    // this.props.fetchBlips(); // DISABLING THIS FOR NOW //
    this.props.
  }

  currentUserObj = () => this.props.users.filter(user => user.id === this.props.current_user)[0];

  render() {
  return (
    <Router>
    <div className="App">
      <Navbar user={this.currentUserObj()} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/users/:username" component={UserPage} />
      <Footer />
    </div>
    </Router>
  )}
}

const mapStateToProps = (state) => ({ users: state.users, current_user: state.user_id })

const mapDispatchToProps = dispatch => ({
    fetchBlips: () => dispatch(fetchBlips()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUserBlips: () => dispatch(fetchUserBlips())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);