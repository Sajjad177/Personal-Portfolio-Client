"use client";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useSendMessageMutation } from "@/redux/features/message/messageManagement";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export type FormValues = {
  name: string;
  email: string;
  message: string;
  sender: string;
  _id: string;
};

const ContactPage = () => {
  const currentUser = useSelector(selectCurrentUser);
//   console.log(currentUser);
  const [sendMessage] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const sendMessageData = {
        name: data.name,
        email: data.email,
        message: data.message,
        sender: currentUser?._id,
      };
      await sendMessage(sendMessageData).unwrap();
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  font-space">
      <div className="w-full max-w-lg  rounded-lg shadow-md p-8 border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full p-3 text-gray-700  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500    dark:border-gray-600 dark:focus:ring-blue-400"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              className="w-full p-3 text-gray-700  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500   dark:border-gray-600 dark:focus:ring-blue-400"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <textarea
              className="w-full p-3 text-gray-700  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500   dark:border-gray-600 dark:focus:ring-blue-400"
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
