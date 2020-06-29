import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import CommentsDiv from './style/Comments.style.js';
import CommentsAuthor from './style/CommentsAuthor.style.js';
import CommentsBody from './style/CommentsBody.style.js';
import CommentsItem from './style/CommentsItem.style.js';


  function Comments(props){



    const commentsList = props.comment
    const listItems = commentsList.map((postedComment) =>
      <CommentsItem key = {postedComment.id}>
        <CommentsAuthor>
          {postedComment.userName}
        </CommentsAuthor>
        {moment(postedComment.createdAt).fromNow()}
        <CommentsBody>
          {postedComment.comment}
        </CommentsBody>
      </CommentsItem>
    )
    return (
      <div id="comments">
        <CommentsDiv >
          {listItems}
        </CommentsDiv>
      </div>
    )
  }

export default Comments;
