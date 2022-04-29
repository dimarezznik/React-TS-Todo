import React, { FormEvent } from "react";
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

  clearState = () => {
    return {
      id: 0,
      text: "",
      check: false,
    };
  };

  getState = () => {
    return this.state;
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.state = {
      ...this.state,
      currentItem: {
        text: e.target.value,
        id: Date.now(),
        check: false,
      },
    };
    this.notify();
  };

  addTodo = (e: FormEvent): void => {
    e.preventDefault();
    if (!this.state.currentItem.text) return;
    this.state = {
      items: [...this.state.items, { ...this.state.currentItem }],
      currentItem: this.clearState(),
    };
    this.notify();
  };

  deleteTodo = (id: number): void => {
    this.state.items = this.state.items.filter(
      (item: ItemType) => item.id !== id
    );
    this.notify();
  };

  textUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    this.state.items.forEach((item: ItemType) => {
      if (item.id === id) {
        item.text = e.target.value;
      }
    });
    this.notify();
  };

  checkedBool = (id: number): void => {
    this.state.items.forEach((item: ItemType) => {
      if (item.id === id) {
        item.check ? (item.check = false) : (item.check = true);
      }
    });

    this.notify();
  };

  deleteMarkTodo = (e: any): void => {
    e.preventDefault();

    this.state.items = this.state.items.filter((item: ItemType) => !item.check);
    this.notify();
  };

  allMarkTodo = (e: any): void => {
    e.preventDefault();

    this.state.items.forEach((item: ItemType) => {
      item.check = true;
    });
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
