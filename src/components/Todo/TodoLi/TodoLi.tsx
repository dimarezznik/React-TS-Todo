import React from "react";
import s from "./TodoLi.module.css";
import { ItemType } from "../../../App";
import Input from "./../../Input/Input";

interface TodoLiPropsType {
  deleteTodo: (id: number) => void;
  item: ItemType;
  textUpdate: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  checkedBool: (id: number) => void;
}

class TodoLi extends React.Component<TodoLiPropsType, any> {
  deleteTodoMethod = () => this.props.deleteTodo(this.props.item.id);
  textUpdateMethod = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.textUpdate(e, this.props.item.id);
  render() {
    return (
      <li>
        <div
          key={this.props.item.id}
          className={!this.props.item.check ? s.light_li : s.dark_li}
          onClick={() => this.props.checkedBool(this.props.item.id)}
        >
          <Input
            type="text"
            value={this.props.item.text}
            className={
              !this.props.item.check ? s.inp_class_light : s.inp_class_dark
            }
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => this.props.textUpdate(e, this.props.item.id)}
          />
        </div>
        <span onClick={this.deleteTodoMethod}>X</span>
      </li>
    );
  }
}

export default TodoLi;
