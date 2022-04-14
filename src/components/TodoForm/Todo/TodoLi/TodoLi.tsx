import React from "react";
import s from './TodoLi.module.css'
import {ItemType} from "../../../../App";

 interface TodoLiPropsType {
    deleteTodo: (id: number) => void,
    item: ItemType,
    textUpdate: (text: string, id: number) => void,
    checkedBool: (id: number) => void,

}

class TodoLi extends React.Component<TodoLiPropsType, any> {
render() {
    return (
        <li
        >
            <div key={this.props.item.id}
                 className={!this.props.item.check ? s.light_li : s.dark_li}
                 onClick={() => this.props.checkedBool(this.props.item.id)}>
                <input
                    type="text"
                    value={this.props.item.text}
                    className={!this.props.item.check ? s.inp_class_light : s.inp_class_dark}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => this.props.textUpdate(e.target.value, this.props.item.id)}
                />
            </div>
            <span onClick={() => this.props.deleteTodo(this.props.item.id)}>X</span>

        </li>
    )
}
}

export default TodoLi;