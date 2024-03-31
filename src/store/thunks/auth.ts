import { Endpoint } from '../../components/const';
import { createAppAsyncThunk } from '../../hooks';
import { dropToken, setToken } from '../../services/token';
import { User } from '../../types/user';

type LoginData = {
  email: string;
  password: string;
};

const checkAuth = createAppAsyncThunk<User, undefined>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<User>(Endpoint.Login);

    return response.data;
  }
);

const login = createAppAsyncThunk<User, LoginData>(
  'auth/login',
  async (body, { extra: api }) => {
    const response = await api.post<User>(Endpoint.Login, body);
    setToken(response.data.token);

    return response.data;
  }
);

const logout = createAppAsyncThunk<unknown, undefined>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(Endpoint.Logout);

    dropToken();
  }
);

export { checkAuth, login, logout };
