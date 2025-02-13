import { baseApi } from "@/redux/api/baseApi";

const messageManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "/message/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Message"],
    }),
    getAllMessages: builder.query({
      query: () => ({
        url: "/message",
        method: "GET",
      }),
      providesTags: ["Message"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/message/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetAllMessagesQuery,
  useDeleteMessageMutation,
} = messageManagement;
