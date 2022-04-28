import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { todoStorage } from "./TodoStorage";

export type ItemType = {
  id: number;
  text: string;
  check: boolean;
};

type StateType = {
  items: Array<ItemType>;
  currentItem: ItemType;
  findEl?: ItemType;
};

const clearState = () => {
  return {
    id: 0,
    text: "",
    check: false,
  };
};
class App extends React.Component<{}, StateType> {
  state: StateType = {
    items: [],
    currentItem: {
      id: 0,
      text: "",
      check: false,
    },
  };

  findList = (id: number) => {
    return this.state.items.find((item) => item.id === id);
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Date.now(),
        check: false,
      },
    });
  };

  addTodo = (): void => {
    if (!this.state.currentItem.text) return;
    this.setState({
      items: [...this.state.items, this.state.currentItem],
      currentItem: clearState(),
    });
  };

  deleteTodo = (id: number): void => {
    const filteredItems = this.state.items.filter(
      (item: ItemType) => item.id !== id
    );
    this.setState({ items: filteredItems });
  };

  textUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    const findEl = this.findList(id);
    if (findEl) {
      findEl.text = e.target.value;
      this.setState({ items: this.state.items });
    }
  };

  checkedBool = (id: number): void => {
    const findEl = this.findList(id);

    if (findEl) {
      findEl.check ? (findEl.check = false) : (findEl.check = true);
      this.setState({ items: this.state.items });
    }
  };

  deleteMarkTodo = (): void => {
    const filteredItems = this.state.items.filter(
      (item: ItemType) => !item.check
    );
    this.setState({ items: filteredItems });
  };

  allMarkTodo = (): void => {
    this.state.items.map((item: ItemType) => {
      item.check = true;
      return item;
    });
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <div className="App">
        <Form
          allMarkTodo={this.allMarkTodo}
          currentItem={this.state.currentItem}
          handleInput={this.handleInput}
          addTodo={this.addTodo}
          deleteMarkTodo={this.deleteMarkTodo}
        />

        <Todo
          items={this.state.items}
          checkedBool={this.checkedBool}
          textUpdate={this.textUpdate}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
