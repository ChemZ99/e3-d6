import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    query: "",
    borderAsin: "",
  };

  handleborder = value => {
    this.setState({ borderAsin: value });
  };

  render() {
    return (
      <Container className="book-area-size">
        <Form.Group className="mb-5 mt-5">
          <Form.Label>Search a Book</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Query"
            onChange={ev => this.setState({ query: ev.target.value })}
          />
        </Form.Group>

        <Row>
          {this.props.data
            .filter(element => element.title.toLowerCase().includes(this.state.query.toLowerCase()))
            .map((element, index) => (
              <SingleBook
                globalAsin={this.state.borderAsin}
                handleborder={this.handleborder}
                setAsin={this.props.setAsin}
                key={index}
                element={element}
              />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
