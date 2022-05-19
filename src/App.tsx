import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

export type ItemType = {
  id: number;
  text: string;
  check: boolean;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Todo />
      </div>
    );
  }
}

export default App;
