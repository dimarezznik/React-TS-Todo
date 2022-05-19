import React from "react";
import s from "./TodoItem.module.css";
import { ItemType } from "../../../App";
import Input from "./../../Input/Input";
import { todoStorage } from "../../../TodoStorage";

interface TodoLiPropsType {
  item: ItemType;
}

class TodoItem extends React.Component<TodoLiPropsType, {}> {
  updateTextItem = (e: React.ChangeEvent<HTMLInputElement>): void => {
    todoStorage.textUpdate(e, this.props.item.id);
  };

  deleteTodoItem = (): void => {
    todoStorage.deleteTodo(this.props.item.id);
  };

  propagationStop = (e: any): void => {
    e.stopPropagation();
  };

  render() {
    return (
      <>
        <div
          className={!this.props.item.check ? s.light_li : s.dark_li}
          onClick={() => todoStorage.checkedBool(this.props.item.id)}
        >
          <Input
            type="text"
            value={this.props.item.text}
            className={
              !this.props.item.check ? s.inp_class_light : s.inp_class_dark
            }
            onClick={this.propagationStop}
            onChange={this.updateTextItem}
          />
        </div>
        <span onClick={this.deleteTodoItem}>X</span>
      </>
    );
  }
}

export default TodoItem;
