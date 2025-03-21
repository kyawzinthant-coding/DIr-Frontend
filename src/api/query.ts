import api, { authApi } from '.';

export const fetchMe = async () => {
  const response = await authApi.get('auth/me');
  console.log(response);
  return response.data;
};

const fetchProviders = (q?: string) =>
  api.get(`user/providers/${q ?? ''}`).then((res) => res.data);

const fetchProviderSeries = (id: string) =>
  api.get(`user/providers/${id}/series`).then((res) => res.data);

const fetchCoursesWithSeries = (id: string) =>
  api.get(`user/series/${id}/courses`).then((res) => res.data);


export const providerQuery = (q?: string) => ({
  queryKey: ['providers', q],
  queryFn: () => fetchProviders(q),
});

const fetchCourseDetails = (id: string) =>
  api.get(`user/courses/${id}`).then((res) => res.data);

export const ProviderSeriesQuery = (id: string) => ({
  queryKey: ['providerSeries', id],
  queryFn: () => fetchProviderSeries(id),
});

export const SeriesCoursesQuery = (id: string) => ({
  queryKey: ['seriesCourses', id],
  queryFn: () => fetchCoursesWithSeries(id),
});

export const CourseDetailsQuery = (id: string) => ({
  queryKey: ['courseDetails', id],
  queryFn: () => fetchCourseDetails(id),
});