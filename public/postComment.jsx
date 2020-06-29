import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Create from './style/Create.style.js';
import CreateSectionHeader from './style/CreateSectionHeader.style.js';
import CreateEditor from './style/CreateEditor.style.js';

import CreateUsername from './style/CreateUsername.style.js';
import CreateComment from './style/CreateUsername.style.js';
import CreateButton from './style/CreateButton.style.js';


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
    const name = target.id;
    this.setState({
      [name]: value,
      updateID: this.props.updatesID,
      createdAt: moment().format()
    });
  }

  submit() {
    console.log(this.state)
    this.props.onSubmit(this.state);
  }

  render (){
    return(
      <Create>
        <Create>
            <CreateSectionHeader>Comments</CreateSectionHeader>
          <CreateEditor>
            <div>
              <CreateUsername id='userName' type="text"  placeholder="Username" onChange={this.handleInputChange}></CreateUsername>
              <CreateComment id='comment' type="text" placeholder="What would you like to say" onChange={this.handleInputChange}></CreateComment>
              <CreateButton onClick={this.submit}>Post Comment</CreateButton>
            </div>
          </CreateEditor>
        </Create>
      </Create>
    );
  }
}

export default PostComment;