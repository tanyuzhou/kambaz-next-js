import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

// Welcome
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

// Assignment (object)
export const fetchAssignment = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/assignment`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axios.get(
    `${HTTP_SERVER}/lab5/assignment/title/${title}`
  );
  return response.data;
};

// Todos (arrays)
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
export const fetchTodoById = async (id: string) => {
  const response = await axios.get(`${TODOS_API}/${id}`);
  return response.data;
};
export const createNewTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// POST/DELETE/PUT
export const postNewTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};
export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};
