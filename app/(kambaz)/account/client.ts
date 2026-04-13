import axios from "axios";
const REMOTE_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;

const api = axios.create({
  withCredentials: true,
});

export const signin = async (credentials: any) => {
  const response = await api.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const signup = async (credentials: any) => {
  const response = await api.post(`${USERS_API}/signup`, credentials);
  return response.data;
};
export const profile = async () => {
  const response = await api.post(`${USERS_API}/profile`);
  return response.data;
};
export const signout = async () => {
  const response = await api.post(`${USERS_API}/signout`);
  return response.data;
};
export const updateUser = async (user: any) => {
  const response = await api.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await api.get(USERS_API);
  return response.data;
};
export const findUsersByRole = async (role: string) => {
  const response = await api.get(`${USERS_API}?role=${role}`);
  return response.data;
};
export const deleteUser = async (userId: string) => {
  const response = await api.delete(`${USERS_API}/${userId}`);
  return response.data;
};
