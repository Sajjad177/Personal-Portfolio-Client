"use client";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await login(data).unwrap();
      // set user and token in redux and local storage
      const { user, token } = res.data;
      dispatch(
        setUser({
          user,
          token,
        })
      );
      toast.success("Login successful 🎉");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Login failed 😢");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-space">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-md w-full ">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-white">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-white">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
