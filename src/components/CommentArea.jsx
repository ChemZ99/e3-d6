import { Component } from "react";
//import Card from "react-bootstrap/Card";

import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    isLoading: true,
    hasError: false,
    comments: [],
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4Njc3ZDEwYmNhMDAwMTQ1ODNmZTIiLCJpYXQiOjE2OTQ0MzU5OTUsImV4cCI6MTY5NTY0NTU5NX0.WusGLpD46QBGjcSOHJev5UfetAXmhAm1xfdW5Oftnxo",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const filteredData = data.filter(elem => elem.elementId === this.props.asin);
        this.setState({ comments: filteredData });
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) this.fetchComments();
  }

  render() {
    return (
      <div className="CommentArea comment-area-size">
        <h3>Commenti</h3>
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
