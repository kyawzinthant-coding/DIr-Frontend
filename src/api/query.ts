import { authApi } from '.';

export const fetchMe = async () => {
  const response = await authApi.get('auth/me');
  return response.data;
};
