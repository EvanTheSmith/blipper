import React, { Component } from 'react'
import { connect } from 'react-redux';

class BlipForm extends Component {

  state = { content: '' };

  handleChange = (e) => { this.setState({content: e.target.value}); };

  handleSubmit = (e) => { e.preventDefault(); this.props.postBlip(this.state) }
  // handleSubmit = (e) => { e.preventDefault(); this.props.dispatch({ type: 'POST_BLIP', payload: this.state }); }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Create new Blip</label>
          <input type="content" onChange={this.handleChange} value={this.state.content} />
          <input type="submit" />
        </form> 
      </div>
    )
  }

}

const mapStateToProps = (state) => { return { users: state.users, current_user: state.user_id } }

const mapDispatchToProps = dispatch => {
 return { 
     postBlip: stateContent => dispatch({ type: 'POST_BLIP', payload: {content: stateContent, user: this.props.current_user} }) 
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlipForm);