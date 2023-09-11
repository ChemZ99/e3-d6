import { Component } from "react";
//import Card from "react-bootstrap/Card";

class SingleComment extends Component {
  state = {};
  render() {
    return (
      <>
        <p>{this.props.comment.rate}</p> <p>{this.props.comment.comment}</p>
      </>
    );
  }
}

export default SingleComment;
