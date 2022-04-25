import React from "react";
import s from "./Form.module.css";
import { ItemType } from "../../App";
import Button from "../Button/Button";
import Input from "./../Input/Input";

interface TodoProps {
  currentItem: ItemType;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent) => void;
  deleteMarkTodo: (e: React.FormEvent) => void;
  allMarkTodo: (e: React.FormEvent) => void;
}

class Form extends React.PureComponent<TodoProps, any> {
  handleInputMethod = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.handleInput(e);

  addTodoMethod = (e: React.FormEvent): void => {
    this.props.addTodo(e);
    e.preventDefault();
  };

  allMarkTodoMethod = (e: React.FormEvent): void => {
    this.props.allMarkTodo(e);
    e.preventDefault();
  };

  deleteMarkTodoMethod = (e: React.FormEvent): void => {
    this.props.deleteMarkTodo(e);
    e.preventDefault();
  };
  render() {
    return (
      <form className={s.add_form}>
        <Input
          type="text"
          placeholder="Введите вашу задачу"
          value={this.props.currentItem.text}
          onChange={this.handleInputMethod}
        />
        <Button onClick={this.addTodoMethod}>добавить задачу</Button>
        <Button onClick={this.allMarkTodoMethod}>отметить все</Button>
        <Button onClick={this.deleteMarkTodoMethod}>удалить отмеченное</Button>
      </form>
    );
  }
}

export default Form;
