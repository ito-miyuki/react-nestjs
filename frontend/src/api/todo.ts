import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const createTodo = async(data: {title: string; userId: number }) => {
    const res = await api.post('/todo', data);
    return res.data;
}

export const deleteTodo = async (id: number) => {
  const res = await api.delete(`/todo/${id}`);
  return res.data;
};

export const updateTodo = async (id: number, data: { completed: boolean }) => {
  const res = await api.patch(`/todo/${id}`, data);
  return res.data;
}