import React, { Component } from 'react'
import { connect } from 'react-redux';
import Blips from '../containers/Blips'
import BlipForm from '../components/BlipForm'

class HomePage extends Component {
  render() { 
    return this.props.loading ? "Loading ..." : (
      <>
      <BlipForm />
      <p>Blips from creators you follow and blips you have created will show here.</p>
      <Blips renderMethod="Home" />
      </>
    )
  }
}

const mapStateToProps = (state) => ({ 
  loading: state.loading, 
})

export default connect(mapStateToProps)(HomePage)