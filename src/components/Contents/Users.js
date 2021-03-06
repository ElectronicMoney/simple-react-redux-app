import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/data/users';

class Users extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        Users
      </div>
    );
  }
}


//mapStateToProp is a single function that will map our
//current state to prop and make it available in this component
const mapStateToProp = state => {
  return state;
}

export default  connect(mapStateToProp, {getUsers})(Users);
