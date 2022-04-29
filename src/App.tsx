import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

export type ID = {
  id: number;
};

export type ItemType = {
  id: ID;
  text: string;
  check: boolean;
};

type StateType = {
  items: Array<ItemType>;
  currentItem: ItemType;
};

class App extends React.Component<{}, StateType> {
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
