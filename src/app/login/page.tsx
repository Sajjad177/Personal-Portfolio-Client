const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full ">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
