import { Component } from "react";
//import Card from "react-bootstrap/Card";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          return <SingleComment key={comment._id} comment={comment} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
