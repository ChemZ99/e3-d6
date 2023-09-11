import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import { Col } from "react-bootstrap";
import PostComment from "./PostComment";

class SingleBook extends Component {
  state = {
    isPosting: false,
  };

  createBorder = () => {
    if (this.props.globalAsin === this.props.element.asin) {
      return "border-danger";
    }
  };

  render() {
    return (
      <Col key={`${this.props.element.category}-${this.props.element.asin}`} xs={12} md={6} xl={3}>
        <Card className={this.createBorder()}>
          <Card.Img
            style={{ height: "600px", objectFit: "contain" }}
            className="img-fluid"
            variant="top"
            src={this.props.element.img}
            onClick={() => {
              this.props.handleborder(this.props.element.asin);
              this.props.setAsin(this.props.element.asin);
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.element.title}</Card.Title>
            <div>
              <Button onClick={() => this.setState({ isPosting: !this.state.isPosting })} variant="primary">
                Post Comment
              </Button>
              {this.state.isPosting && <PostComment asin={this.props.element.asin} />}
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
