import React from "react";
import { ItemType } from "../../App";
import TodoLi from "./TodoLi/TodoLi";

export interface TodoProps {
  deleteTodo: (id: number) => void;
  items: Array<ItemType>;
  textUpdate: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  checkedBool: (id: number) => void;
}

class Todo extends React.Component<TodoProps, any> {
  render() {
    return (
      <ul>
        {this.props.items.map((item: ItemType) => {
          return (
            <TodoLi
              key={item.id}
              item={item}
              checkedBool={this.props.checkedBool}
              textUpdate={this.props.textUpdate}
              deleteTodo={this.props.deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}

export default Todo;
