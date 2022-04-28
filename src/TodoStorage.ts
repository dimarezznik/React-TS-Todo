import React from "react";
import { ItemType } from "./App";

type Subscription<State> = (state: State) => void;

class BloC<State> {
  private listeners: Set<Subscription<State>> = new Set([]);

  constructor(public state: State) {}

  subscribe(listener: Subscription<State>) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: Subscription<State>) {
    this.listeners.delete(listener);
  }

  protected notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }
}

export class TodoStorage extends BloC<any> {
  constructor(public state: any) {
    super(state);
  }

  // handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   this.state = {
  //     currentItem: {
  //       text: e.target.value,
  //       id: Date.now(),
  //       check: false,
  //     },
  //   };
  //   this.notify();
  //   console.log(this.state.currentItem);
  // };
  //
  // increment = () => {
  //   this.state++;
  //   this.notify();
  // };
  //
  // decrement = () => {
  //   this.state--;
  //   this.notify();
  // };
  findList = (id: number) => {
    return this.state.items.find((item: any) => item.id === id);
  };

  clearState = () => {
    return {
      id: 0,
      text: "",
      check: false,
    };
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.state = {
      currentItem: {
        text: e.target.value,
        id: Date.now(),
        check: false,
      },
    };
    this.notify();
  };

  addTodo = (): void => {
    if (!this.state.currentItem.text) return;
    this.state = {
      items: [...this.state.items, this.state.currentItem],
      currentItem: this.clearState(),
    };
    this.notify();
  };

  deleteTodo = (id: number): void => {
    const filteredItems = this.state.items.filter(
      (item: ItemType) => item.id !== id
    );
    this.state = { items: filteredItems };
    this.notify();
  };

  textUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    const findEl = this.findList(id);
    if (findEl) {
      findEl.text = e.target.value;
      this.state = { items: this.state.items };
    }
    this.notify();
  };

  checkedBool = (id: number): void => {
    const findEl = this.findList(id);

    if (findEl) {
      findEl.check ? (findEl.check = false) : (findEl.check = true);
      this.state = { items: this.state.items };
    }
    this.notify();
  };

  deleteMarkTodo = (): void => {
    const filteredItems = this.state.items.filter(
      (item: ItemType) => !item.check
    );
    this.state = { items: filteredItems };
    this.notify();
  };

  allMarkTodo = (): void => {
    this.state.items.map((item: ItemType) => {
      item.check = true;
      return item;
    });
    this.state = { items: this.state.items };
    this.notify();
  };
}

export const todoStorage = new TodoStorage({
  items: [],
  currentItem: {
    id: 0,
    text: "",
    check: false,
  },
});
