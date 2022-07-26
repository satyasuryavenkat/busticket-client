import axios from 'axios';

const url = 'http://localhost:5051/bus';

// export const fetchTodos = () => axios.get(url);

// export const createTodo = (todo) => axios.post(url, todo);

export const authenticateUser = (user) => axios.post(`${url}/users/authenticate`, user);