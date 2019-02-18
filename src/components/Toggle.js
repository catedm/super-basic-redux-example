import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMe } from '../actions/actions';

class Toggle extends Component {  
  render() {
    const { messageVisibility, toggleMe } = this.props;
    return (
      <div>
        {messageVisibility &&
          <p>This is a redux example</p>
        }
        <button onClick={toggleMe}>Toggle Me</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMe
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);