import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          timeAgo={faker.date.recent().getTime()}
          name={faker.name.firstName}
          avatar={faker.image.avatar()}
          content="Nice wacth."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          timeAgo={faker.date.recent().getTime()}
          name={faker.name.firstName}
          avatar={faker.image.avatar()}
          content="Thanks."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          timeAgo={faker.date.recent().getTime()}
          name={faker.name.firstName}
          avatar={faker.image.avatar()}
          content="So, how you guys doing?"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
