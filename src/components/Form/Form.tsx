import React, { FormEvent } from "react";
import s from "./Form.module.css";
import Button from "../Button/Button";
import Input from "./../Input/Input";
import { todoStorage } from "../../TodoStorage";

class Form extends React.PureComponent {
  force = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    todoStorage.subscribe(this.force);
  }
  componentWillUnmount() {
    todoStorage.unsubscribe(this.force);
  }

  setTodo = (e: FormEvent) => {
    e.preventDefault();
    todoStorage.addTodo();
  };
  markAllTodo = (e: FormEvent) => {
    e.preventDefault();
    todoStorage.allMarkTodo();
  };
  deleteMarkTask = (e: FormEvent) => {
    e.preventDefault();
    todoStorage.deleteMarkTodo();
  };

  render() {
    return (
      <form className={s.add_form}>
        <Input
          type="text"
          placeholder="Введите вашу задачу"
          value={todoStorage.getState().currentItem.text}
          onChange={todoStorage.handleInput}
        />
        <Button onClick={this.setTodo}>добавить задачу</Button>
        <Button onClick={this.markAllTodo}>отметить все</Button>
        <Button onClick={this.deleteMarkTask}>удалить отмеченное</Button>
      </form>
    );
  }
}

export default Form;
