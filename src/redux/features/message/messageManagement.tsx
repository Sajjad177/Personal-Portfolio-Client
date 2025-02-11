import { baseApi } from "@/redux/api/baseApi";

const messageManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "/message/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = messageManagement;
