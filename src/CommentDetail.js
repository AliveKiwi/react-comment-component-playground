import React from 'react';
// import ReactDOM from 'react-dom';

class CommentDetail extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.name}
          </a>
          <div className="metadata">
            <span className="date">{this.props.timeAgo}</span>
          </div>
          <div className="text">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
