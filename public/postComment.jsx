import React from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');


class PostComment extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      updateID: 1,// Need to find a way to pass UpdateID in...
      userName: '',
      comment: '',
      createdAt: faker.date.past()// Need to find a date format that works
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.className;
    this.setState({
      [name]: value
    });
  }

  submit() {
    console.log(this.state)
    this.props.onSubmit(this.state);
  }

  render (){
    return(
      <div className="create">
        <ul>
          {
          <div className="create">
            <div className="create-editor">
              <h2>AUTHOR</h2>
              <div>
                <input className="userName" type="text"  placeholder="userName" onChange={this.handleInputChange}></input>
                <textarea className="comment"  type="text" placeholder="Comment" onChange={this.handleInputChange}></textarea>
                <button className="create-submit-button" onClick={this.submit}>Post Comment</button>
              </div>
            </div>
          </div>
          }
        </ul>
      </div>
    );
  }
}

export default PostComment;