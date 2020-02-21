import React from 'react';

class ApprovalCard extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '10px' }} className="ui cards">
        <div className="card">
          <div className="content">{this.props.children}</div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button">Approve</div>
              <div class="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
