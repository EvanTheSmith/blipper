import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import { fetchBlips } from './actions/blipActions'
import { fetchUsers } from './actions/userActions'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'
import Footer from './components/Footer'

class App extends Component { 

  componentDidMount() {
    this.props.fetchUsers(); // Removing these soon ! //
    this.props.fetchBlips(); // Removing these soon ! //
    // !!! Currently, the HomePage component is broken without these fetches ^^^ //
  }

  currentUserObj = () => this.props.users.filter(user => user.id === this.props.current_user)[0];

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.currentUserObj()} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/users/:username" component={UserPage} />
          <Footer />
        </BrowserRouter>
      </div> 
    )
  }
}   

const mapStateToProps = (state) => ({ users: state.users, current_user: state.user_id })

const mapDispatchToProps = dispatch => ({
    fetchBlips: () => dispatch(fetchBlips()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);