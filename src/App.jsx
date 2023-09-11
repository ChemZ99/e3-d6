import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasy from "./components/assets/fantasy.json";
//import history from "./components/assets/history.json";
//import horror from "./components/assets/horror.json";
//import romance from "./components/assets/romance.json";
//import scifi from "./components/assets/scifi.json";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import { Container } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";
//import FilterBookList from "./components/FilterBookList";

class App extends Component {
  state = {
    isLoading: false,
    hasError: false,
    selectedAsin: "",
  };

  setAsin = value => {
    this.setState({ selectedAsin: value });
  };

  render() {
    return (
      <div className="App">
        <MyNav />
        <Welcome />
        <Container fluid className="d-flex">
          <BookList setAsin={this.setAsin} data={fantasy} />
          <CommentArea asin={this.state.selectedAsin} />
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
