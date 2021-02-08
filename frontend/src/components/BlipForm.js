import React, { Component } from 'react'
import { connect } from 'react-redux';

class BlipForm extends Component {

  state = { content: '' };

  handleChange = (e) => { this.setState({content: e.target.value}); };

  handleSubmit = (e) => { e.preventDefault(); this.props.postBlip(this.state) }
  // handleSubmit = (e) => { e.preventDefault(); this.props.dispatch({ type: 'POST_BLIP', payload: this.state }); }

  render() {
    return(
      <div className="blipForm">
        <form onSubmit={this.handleSubmit}>
          <textarea type="content" onChange={this.handleChange} value={this.state.content} /><br />
          <input type="submit" />
        </form> 
      </div>
    )
  }

}

const mapStateToProps = (state) => { return { users: state.users, current_user: state.user_id } }

const mapDispatchToProps = dispatch => {
 return { 
     postBlip: stateContent => dispatch({ type: 'POST_BLIP', payload: {content: stateContent} }) 
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlipForm);