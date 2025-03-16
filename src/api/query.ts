import api, { authApi } from '.';

export const fetchMe = async () => {
  const response = await authApi.get('auth/me');
  return response.data;
};

const fetchProviders = (q?: string) =>
  api.get(`user/providers/${q ?? ''}`).then((res) => res.data);

export const providerQuery = (q?: string) => ({
  queryKey: ['providers', q],
  queryFn: () => fetchProviders(q),
});
