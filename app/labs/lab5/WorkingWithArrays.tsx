"use client";
import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;
export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary me-2" href={API}>
        Get Todos
      </a>
      <h4 className="mt-3">Retrieving an Item from an Array by ID</h4>
      <input
        id="wd-todo-id"
        className="form-control mb-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary me-2"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <h4 className="mt-3">Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary me-2"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <h4 className="mt-3">Creating new Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-primary me-2"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <h4 className="mt-3">Deleting from an Array</h4>
      <a
        id="wd-remove-todo"
        className="btn btn-primary me-2"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>
      <h4 className="mt-3">Updating an Item in an Array</h4>
      <label className="form-label" htmlFor="wd-todo-title">
        Title
      </label>
      <input
        id="wd-todo-title"
        className="form-control mb-2"
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <a
        id="wd-update-todo-title"
        className="btn btn-primary me-2"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Todo Title
      </a>
      <h4 className="mt-3">On Your Own: Update Completed</h4>
      <input
        id="wd-todo-completed"
        className="form-check-input me-2"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <a
        id="wd-update-todo-completed"
        className="btn btn-primary me-2"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Todo Completed
      </a>
      <h4 className="mt-3">On Your Own: Update Description</h4>
      <input
        id="wd-todo-description"
        className="form-control mb-2"
        defaultValue={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <a
        id="wd-update-todo-description"
        className="btn btn-primary me-2"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Todo Description
      </a>
    </div>
  );
}
