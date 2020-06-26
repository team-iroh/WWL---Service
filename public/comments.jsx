import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


  function Comments(props){



    const commentsList = props.comment
    const listItems = commentsList.map((postedComment) =>
      <div className="comment-item" key = {postedComment.id}>
        <span className="comment-item-author">
          {postedComment.userName}
        </span>
        {moment(postedComment.createdAt).fromNow()}
        <span className="comment-item-comment">
          {postedComment.comment}
        </span>
      </div>
    )
    return (
      <div id="comments">
        <div className="comment" >
          {listItems}
        </div>
      </div>
    )
  }

export default Comments;
