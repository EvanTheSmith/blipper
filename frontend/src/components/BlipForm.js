import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postBlip } from '../actions/blipActions';

class BlipForm extends Component {

  state = { content: '', user_id: this.props.current_user };

  handleChange = (e) => { this.setState({content: e.target.value}); };

  handleSubmit = (e) => { 
      e.preventDefault();
      this.props.postBlip(this.state);
      this.setState({content: ''});
  }

  render() {
    return(
      <div className="blipForm">
        <form onSubmit={this.handleSubmit}>
          <textarea type="content" onChange={this.handleChange} value={this.state.content} /><br />
          <input value="Post Blip" type="submit" />
        </form> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ current_user: state.user_id })
const mapDispatchToProps = dispatch => ({ postBlip: state => dispatch(postBlip(state)) })

export default connect(mapStateToProps, mapDispatchToProps)(BlipForm);