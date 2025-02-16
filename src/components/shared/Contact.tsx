"use client";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useSendMessageMutation } from "@/redux/features/message/messageManagement";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export type FormValues = {
  name: string;
  email: string;
  message: string;
  sender: string;
  _id: string;
};

const Contact = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [sendMessage] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    AOS.init();
  }, []);

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
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-20 min-h-screen px-6 py-10   font-space">
      {/* Left Section */}
      <div data-aos="fade-right" className="text-center lg:text-left space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <div className="space-y-2">
          <div className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <IoMdHome className="text-2xl " />
            <span>Fulbari, Shariyakandi, Bogura</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <IoMail className="text-xl " />
            <span>sajjadhossainx06@gmail.com</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <span>01907488316</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-4">
          <a
            href="https://www.facebook.com/sajjad.hossin.902604"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/sajjadsajjad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="https://github.com/Sajjad177"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>

      {/* Right Section (Contact Form) */}
      <Card
        data-aos="fade-left"
        className="w-full max-w-lg shadow-lg border rounded-lg p-6 bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                className="dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <Input
                type="email"
                className="dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <Textarea
                className="dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
