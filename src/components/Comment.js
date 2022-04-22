import CommentDate from './CommentDate';
import CommentText from './UI/CommentText';
import './Comment.css'
import UserInfo from './UserInfo';

function Comment(props) {

  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <CommentText className="Comment-text">
      <div>{props.text}</div>
      <CommentDate date={props.date} />
      </CommentText>
    </div>
  );
}
export default Comment;