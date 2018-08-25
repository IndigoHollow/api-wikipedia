import React, {Component} from "react";
import ReactDOM from "react-dom";
import Api from './components/api.jsx';

class App extends Component {
  render() {
    return (
      <Api />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));