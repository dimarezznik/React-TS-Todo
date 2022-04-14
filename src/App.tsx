import React, {FormEvent} from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";

export type ItemType = {
    id: number,
    text: string,
    check: boolean
}

type StateType = {
    items: Array<ItemType>,
    currentItem: ItemType
}

class App extends React.Component {
    state: StateType = {
        items: [],
        currentItem: {
            id: 0,
            text: "",
            check: true,
        },
    };

    handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            currentItem: {
                text: e.target.value,
                id: Date.now(),
            },
        });
    };

    addTodo = (e: React.FormEvent) : void => {
        e.preventDefault();
        if (this.state.currentItem.text !== "") {
            const newItems = [...this.state.items, this.state.currentItem];
            this.setState({
                items: newItems,
                currentItem: {
                    id: 0,
                    text: "",
                },
            });
        }
    };

    deleteTodo = (id: number): void => {
        const filteredItems = this.state.items.filter((item: ItemType) => item.id !== id);
        this.setState({
            items: filteredItems,
        });
    };

    textUpdate = (text: string, id: number): void => {
        const items = this.state.items;
        items.map((item: ItemType) => {
            if (id === item.id) {
                item.text = text;
            }
        });
        this.setState({
            items
        });
    };


    checkedBool = (e: boolean, id: number): void => {
        const items = this.state.items;
        items.map((item: ItemType) => {
            if (id === item.id) {
                item.check = e;
            }
        });
        this.setState({
            items
        });
    }

    deleteMarkTodo = (e: React.FormEvent): void => {
        e.preventDefault()
        const filteredItems = this.state.items.filter((item: ItemType) => !item.check);
        this.setState({
            items: filteredItems,
        });
    }

    allMarkTodo = (e: any): void => {
        e.preventDefault()
        const items = this.state.items;
        items.map((item: ItemType) => {
                item.check = true;
        });
        this.setState({
            items
        });
        console.log(items)
    }

    render() {
        return (
            <div className="App">
                <TodoForm
                    deleteTodo={this.deleteTodo}
                    currentItem={this.state.currentItem}
                    items={this.state.items}
                    handleInput={this.handleInput}
                    addTodo={this.addTodo}
                    textUpdate={this.textUpdate}
                    checkedBool={this.checkedBool}
                    deleteMarkTodo={this.deleteMarkTodo}
                    allMarkTodo={this.allMarkTodo}
                />
            </div>
        );
    }
}

export default App;
