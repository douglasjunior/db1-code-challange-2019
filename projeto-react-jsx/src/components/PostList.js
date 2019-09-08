import React from 'react';

import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { removePostAction } from '../redux/posts';

export const PostList = ({ postList, removePost }) => (
    <ListGroup>
        {postList.map((post, index) => (
            <ListGroupItem key={index}>
                {post.description}
                <Button
                    type="button"
                    onClick={() => removePost(index)}
                    close
                />
            </ListGroupItem>
        ))}
    </ListGroup>
);

const mapStateToProps = state => ({
    postList: state.posts,
});
const mapDispatchToProps = {
    removePost: removePostAction,
};
const PostListConnected = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListConnected;
