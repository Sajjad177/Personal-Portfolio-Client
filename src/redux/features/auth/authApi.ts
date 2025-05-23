import { baseApi } from "../../api/baseApi";

const authAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/user/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation } = authAPi;
