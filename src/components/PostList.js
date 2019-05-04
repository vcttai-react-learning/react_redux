import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/AppPost14Actions';

class PostList extends React.Component
{
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>Post List</div>
        );
    }
}

export default connect(
    null,
    {
        fetchPosts: fetchPosts
    }
)(PostList);