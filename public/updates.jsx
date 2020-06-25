import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

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
        <h1 className="update-title">{title}</h1>
        <div>
          <div className="update-author">
          {author + ' '}
          {date}
          </div>
          <figure className="update-image">
            <img src={image}/>
          </figure>
          <p className="update-body">
            {body}
          </p>
          <div className="update-likes">
            Likes: {likes}
          </div>
        </div>
      </div>
    )
  }
}



export default Updates;