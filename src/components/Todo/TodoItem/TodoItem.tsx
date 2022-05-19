import React from "react";
import s from "./TodoLi.module.css";
import { ItemType } from "../../../App";
import Input from "./../../Input/Input";
import { todoStorage } from "../../../TodoStorage";

interface TodoLiPropsType {
  item: ItemType;
}

class TodoLi extends React.Component<TodoLiPropsType, any> {
  render() {
    return (
      <li>
        <div
          key={this.props.item.id}
          className={!this.props.item.check ? s.light_li : s.dark_li}
          onClick={() => todoStorage.checkedBool(this.props.item.id)}
        >
          <Input
            type="text"
            value={this.props.item.text}
            className={
              !this.props.item.check ? s.inp_class_light : s.inp_class_dark
            }
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => todoStorage.textUpdate(e, this.props.item.id)}
          />
        </div>
        <span onClick={() => todoStorage.deleteTodo(this.props.item.id)}>
          X
        </span>
      </li>
    );
  }
}

export default TodoLi;
