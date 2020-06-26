import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


class PostComment extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      updateID: 1,
      userName: '',
      comment: '',
      createdAt: moment().format()
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.className;
    this.setState({
      [name]: value,
      updateID: this.props.updatesID,
      createdAt: moment().format()
    });
  }

  submit() {
    this.props.onSubmit(this.state);
  }

  render (){
    return(
      <div className="create">
        <div className="create">
            <div className="create-section-header">Comments</div>
          <div className="create-editor">
            <div>
              <input className="create-userName" type="text"  placeholder="Username" onChange={this.handleInputChange}></input>
              <textarea className="create-comment"  type="text" placeholder="What would you like to say" onChange={this.handleInputChange}></textarea>
              <button className="create-submit-button" onClick={this.submit}>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostComment;