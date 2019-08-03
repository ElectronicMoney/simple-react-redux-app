import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../action';

class Posts extends React.Component {

  render() {
    return (
      <div>
        Posts
      </div>
    );
  }
}


//mapStateToProp is a single function that will map our
//current state to prop and make it available in this component
const mapStateToProp = state => {
  return state;
}

export default  connect(mapStateToProp, {getPosts})(Posts);
