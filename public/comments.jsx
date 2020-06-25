import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


  function Comments(props){



    const commentsList = props.comment
    const listItems = commentsList.map((postedComment) =>
    <div className="comment" key = {postedComment.id}>
      <div className="comment-item">
        <span className="comment-item-author">
          {postedComment.userName}
        </span>
        {moment(postedComment.createdAt).fromNow()}
      </div>
      <span className="comment-item-comment">
        {postedComment.comment}
      </span>
    </div>
    )
    return (
      <div id="comments">
        {listItems}
      </div>
    )
  }

export default Comments;
