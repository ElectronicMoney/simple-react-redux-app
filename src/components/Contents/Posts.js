import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/data/posts';

class Posts extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }

  /**
   * For any API calls, it must have these 3 states: 
   * BEGIN, SUCCESS, FAILURE. 
   * These states will be helpful for you to decide 
   * when to show loading, or handle error in the user interface.
   * GET_POSTS_BEGIN
   * GET_POSTS_SUCCESS
   * GET_POSTS_FAILURE
   */

  renderPosts() {
    // console.log(this.props.posts);
    if (this.props.posts.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.props.posts) {
      return this.props.posts.payload.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      });
    }

    if (this.props.posts.error) {
      return <div>Error!</div>;
    }

  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        { this.renderPosts() }
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
