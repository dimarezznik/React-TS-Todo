import React from "react";
import s from './TodoLi.module.css'
import {ItemType} from "../../../../App";

 interface TodoLiPropsType {
    deleteTodo: (id: number) => void,
    item: ItemType,
    textUpdate: (text: string, id: number) => void,
    checkedBool: (e: boolean, id: number) => void,

}

class TodoLi extends React.Component<TodoLiPropsType, any> {
render() {
    return (
        <li
            key={this.props.item.id}
            className={s.light_li}
        >
            <div className={s.li_bl}>
                <input type="checkbox" className={s.checkbox} value={this.props.item.check}
                       onChange={(e) => this.props.checkedBool(e.target.checked, this.props.item.id)}/>
                <input
                    type="text"
                    value={this.props.item.text}
                    className={s.inp_class}
                    onChange={(e) => this.props.textUpdate(e.target.value, this.props.item.id)}
                />
                <span onClick={() => this.props.deleteTodo(this.props.item.id)}>X</span>
            </div>
        </li>
    )
}
}

export default TodoLi;