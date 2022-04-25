import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

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
    const findLi = this.state.items.find((item) => item.id === id);
    return findLi;
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
    if (this.state.currentItem.text) {
      const newItems = [...this.state.items, this.state.currentItem];
      this.setState({
        items: newItems,
        currentItem: {
          id: 0,
          text: "",
          check: false,
        },
      });
    }
  };

  deleteTodo = (id: number): void => {
    const filteredItems = this.state.items.filter(
      (item: ItemType) => item.id !== id
    );
    this.setState({ items: filteredItems });
  };

  textUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    const findEl: ItemType | undefined = this.findList(id);

    if (findEl) {
      findEl.text = e.target.value;
      this.setState({ findEl });
    }
  };

  checkedBool = (id: number): void => {
    const findEl: ItemType | undefined = this.findList(id);

    if (findEl) {
      findEl.check ? (findEl.check = false) : (findEl.check = true);
      this.setState({ findEl });
    }
  };

  deleteMarkTodo = (): void => {
    const filteredItems = this.state.items.filter(
      (item: ItemType) => !item.check
    );
    this.setState({ items: filteredItems });
  };

  allMarkTodo = (): void => {
    const items = this.state.items;
    items.map((item: ItemType) => {
      item.check = true;
      return item;
    });
    this.setState({ items });
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
