"use client";
import { Button } from "@/components/ui/button";
import {
  useDeleteMessageMutation,
  useGetAllMessagesQuery,
} from "@/redux/features/message/messageManagement";
import { FiTrash } from "react-icons/fi";
import { toast } from "sonner";

const ViewMessage = () => {
  const { data } = useGetAllMessagesQuery([]);
  const [deleteMessage] = useDeleteMessageMutation();
  const messages = data?.data || [];

  const handleDelete = async (id: string) => {
    try {
      await deleteMessage(id);
      toast.success("Message deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete message");
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-space">
      {messages.length > 0 ? (
        messages.map((message: any, index: number) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col dark:bg-gray-800  transition-all hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate w-[80%]">
                {message.email || "New Message"}
              </h3>
              <span className="text-gray-400 dark:text-white text-sm">
                {new Date(message.createdAt).toLocaleString()}
              </span>
            </div>

            {/* Message Content */}
            <p className="text-gray-500 dark:text-white text-sm mt-2 line-clamp-2">
              {message.message || "No content available..."}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <Button
                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-all"
                onClick={() => handleDelete(message._id)}
              >
                <FiTrash className="text-lg" />
                <span className="text-sm">Delete</span>
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full col-span-3">
          No messages available.
        </p>
      )}
    </div>
  );
};

export default ViewMessage;
