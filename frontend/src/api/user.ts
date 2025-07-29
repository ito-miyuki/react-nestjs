import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // NestJS が動くポート
});

export interface User {
  id: number;
  name: string;
  email: string;
}

// export const getUsers = async (): Promise<User[]> => {
//   const res = await api.get('/users');
//   return res.data;
// };

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const res = await api.get(`/users/email/${email}`);
    return res.data;
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const res = await api.post('/users', user);
  return res.data;
};
