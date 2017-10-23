import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
    	Posts Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
//                           ^^^^^^^^^^^^^^
// is short-hand equivalent to the mapDispatchToProps() functions we've been writing
