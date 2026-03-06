"use client";
import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext<any>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<any[]>([]);
    const [todo, setTodo] = useState({ id: "-1", title: "Learn Context" });

    const addTodo = (todo: any) => {
        setTodos([...todos, { ...todo, id: new Date().getTime().toString() }]);
        setTodo({ id: "-1", title: "" });
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((t: any) => t.id !== id));
    };

    const updateTodo = (todo: any) => {
        setTodos(todos.map((t: any) => (t.id === todo.id ? todo : t)));
        setTodo({ id: "-1", title: "" });
    };

    return (
        <TodoContext.Provider value={{ todos, todo, setTodo, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

function TodoForm() {
    const { todo, setTodo, addTodo, updateTodo } = useContext(TodoContext);
    return (
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
    );
}

function TodoItem({ todoData }: { todoData: any }) {
    const { deleteTodo, setTodo } = useContext(TodoContext);
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {todoData.title}
            <div>
                <button onClick={() => setTodo(todoData)} id="wd-set-todo-click" className="btn btn-primary me-2">
                    Edit
                </button>
                <button onClick={() => deleteTodo(todoData.id)} id="wd-delete-todo-click" className="btn btn-danger">
                    Delete
                </button>
            </div>
        </li>
    );
}

function TodoList() {
    const { todos } = useContext(TodoContext);
    return (
        <div>
            <ul className="list-group">
                <TodoForm />
                {todos.map((t: any) => (
                    <TodoItem key={t.id} todoData={t} />
                ))}
            </ul>
            <hr />
        </div>
    );
}

function TodoContextComponent() {
    return (
        <div id="wd-todo-context">
            <h2>Todo List Context</h2>
            <TodoList />
        </div>
    );
}

export default function TodoContextWrapper() {
    return (
        <TodoProvider>
            <TodoContextComponent />
        </TodoProvider>
    );
}
