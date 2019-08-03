import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../action/Users';

class Users extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props);

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
