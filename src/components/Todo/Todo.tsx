import React from "react";
import TodoLi from "./TodoLi/TodoLi";
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
          return <TodoLi key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}

export default Todo;
