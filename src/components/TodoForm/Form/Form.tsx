import React from "react";
import s from './Form.module.css'
import {ItemType} from "../../../App";

interface TodoProps {
    currentItem: ItemType,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addTodo: (e: React.FormEvent) => void,
    deleteMarkTodo: (e: React.FormEvent) => void
    allMarkTodo: (e: React.FormEvent) => void
}

class Form extends React.PureComponent<TodoProps, any> {
    render() {
        return (
            <form className={s.add_form}>
                <input
                    type="text"
                    placeholder="Введите вашу задачу"
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                />
                <button onClick={this.props.addTodo}>добавить задачу</button>
                <button onClick={this.props.allMarkTodo} >отметить все</button>
                <button onClick={this.props.deleteMarkTodo} >удалить отмеченное</button>

            </form>
        )
    }
}

export default Form;