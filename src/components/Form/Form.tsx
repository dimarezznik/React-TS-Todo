import React from "react";
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

  render() {
    return (
      <form className={s.add_form}>
        <Input
          type="text"
          placeholder="Введите вашу задачу"
          value={todoStorage.getState().currentItem.text}
          onChange={todoStorage.handleInput}
        />
        <Button onClick={todoStorage.addTodo}>добавить задачу</Button>
        <Button onClick={todoStorage.allMarkTodo}>отметить все</Button>
        <Button onClick={todoStorage.deleteMarkTodo}>удалить отмеченное</Button>
      </form>
    );
  }
}

export default Form;
