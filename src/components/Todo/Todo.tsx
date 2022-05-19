import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import { todoStorage } from "../../TodoStorage";

class Todo extends React.PureComponent {
  force = () => {
    this.forceUpdate();
  };
  componentDidMount() {
    todoStorage.subscribe(this.force);
  }
  componentWillUnmount() {
    todoStorage.unsubscribe(this.force);
  }
  render() {
    return (
      <ul>
        {todoStorage.state.items.map((item: any) => {
          return (
            <li key={item.id}>
              <TodoItem item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Todo;
