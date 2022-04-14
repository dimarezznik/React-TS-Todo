import React from "react";
import s from "./TodoForm.module.css";
import Form from "./Form/Form";
import Todo from "./Todo/Todo";
import {ItemType} from "../../App";

interface TodoProps {
    deleteTodo:(id: number) => void,
    currentItem: ItemType,
    items: Array<ItemType>,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addTodo: (e: React.FormEvent) => void,
    textUpdate: (text: string, id: number) => void,
    checkedBool: (id: number) => void,
    deleteMarkTodo: (e: React.FormEvent) => void,
    allMarkTodo: (e: React.FormEvent) => void
}

class TodoForm extends React.Component<TodoProps, any> {

    render() {
        return (
            <div className={s.todo}>
                <Form allMarkTodo={this.props.allMarkTodo} currentItem={this.props.currentItem} handleInput={this.props.handleInput} addTodo={this.props.addTodo} deleteMarkTodo={this.props.deleteMarkTodo} />
                <Todo items={this.props.items} checkedBool={this.props.checkedBool} textUpdate={this.props.textUpdate} deleteTodo={this.props.deleteTodo} />
            </div>
        );
    }
}

export default TodoForm;
