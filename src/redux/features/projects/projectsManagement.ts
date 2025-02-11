import { baseApi } from "@/redux/api/baseApi";

const projectManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
    }),
    getSingleProject: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetSingleProjectQuery } =
  projectManagement;
