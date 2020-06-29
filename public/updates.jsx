import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import UpdateTitle from './style/UpdateTitle.style.js';
import UpdateAuthor from './style/UpdateAuthor.style.js';
import UpdateImage from './style/UpdateImage.style.js';
import UpdateBody from './style/UpdateBody.style.js';
import UpdateLikes from './style/UpdateLikes.style.js';


class Updates extends React.Component {
  constructor(props) {
    super (props)
  }
  render() {
    var title = this.props.update.title;
    var author = this.props.update.author
    var body = this.props.update.body
    var date = moment(this.props.update.createdAt).fromNow()
    var image = this.props.update.imageUrl
    var likes = this.props.update.likes
    return (
      <div className="update">
        <UpdateTitle>{title}</UpdateTitle>
        <div>
          <UpdateAuthor>
          {author + ' '}
          {date}
          </UpdateAuthor>
          <UpdateImage>
            <img src={image}/>
          </UpdateImage>
          <UpdateBody>
            {body}
          </UpdateBody>
          <UpdateLikes>
             {likes} people like this update
          </UpdateLikes>
        </div>
      </div>
    )
  }
}

UpdateTitle.displayName = 'UpdateTitle';
UpdateAuthor.displayName = 'UpdateAuthor';
UpdateBody.displayName = 'UpdateBody';
UpdateLikes.displayName = 'UpdateLikes';


export default Updates;