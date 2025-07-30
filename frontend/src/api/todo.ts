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
