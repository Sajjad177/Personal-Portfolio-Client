import { baseApi } from "@/redux/api/baseApi";

const blogManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery } = blogManagement;
