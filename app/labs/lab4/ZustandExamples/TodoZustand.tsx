"use client";
import React from "react";
import { create } from "zustand";

const useTodoStore = create<any>((set) => ({
    todos: [],
    todo: { id: "-1", title: "Learn Zustand" },
    setTodo: (todo: any) => set({ todo }),
    addTodo: (todo: any) => set((state: any) => ({
        todos: [...state.todos, { ...todo, id: new Date().getTime().toString() }],
        todo: { id: "-1", title: "" }
    })),
    deleteTodo: (id: string) => set((state: any) => ({
        todos: state.todos.filter((t: any) => t.id !== id)
    })),
    updateTodo: (todo: any) => set((state: any) => ({
        todos: state.todos.map((t: any) => (t.id === todo.id ? todo : t)),
        todo: { id: "-1", title: "" }
    })),
}));

export default function TodoZustand() {
    const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodoStore();
    return (
        <div id="wd-todo-zustand">
            <h2>Todo List Zustand</h2>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input
                        className="form-control w-50"
                        value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                    />
                    <div>
                        <button onClick={() => updateTodo(todo)} id="wd-update-todo-click" className="btn btn-warning me-2">
                            Update
                        </button>
                        <button onClick={() => addTodo(todo)} id="wd-add-todo-click" className="btn btn-success">
                            Add
                        </button>
                    </div>
                </li>
                {todos.map((t: any) => (
                    <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {t.title}
                        <div>
                            <button onClick={() => setTodo(t)} id="wd-set-todo-click" className="btn btn-primary me-2">
                                Edit
                            </button>
                            <button onClick={() => deleteTodo(t.id)} id="wd-delete-todo-click" className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
