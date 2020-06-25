import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

// class Comments extends React.Component {
//   constructor(props) {
//     super (props)
//   }
//   render() {

  function Comments(props){



    const commentsList = props.comment
    if(Array.isArray( commentsList)) {
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
    } else {
      return (
        <div id="comments">
        </div>
      )
    }
  }

export default Comments;
