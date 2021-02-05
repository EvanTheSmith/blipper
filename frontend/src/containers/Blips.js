import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBlips } from '../actions/blipActions'
import Blip from '../components/Blip'

class Blips extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderMyBlips = () => {
    return this.props.blips.map(blip => <Blip key={blip.id} content={blip.content} />)
  }

  render() { 
    return this.props.loading ? "Loading ..." : this.renderMyBlips()
  }
}

const mapStateToProps = (state) => {
  return { blips: state.blips, loading: state.loading, current_user: state.user_id }
}

const mapDispatchToProps = dispatch => {
  return { fetchUsers: () => dispatch(fetchBlips()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blips)