import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const userRegister = async (userData) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData,
        { withCredentials: true }
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    const payload = {
      username: data.username,
      fullName: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      email: data.email,
      password: data.password,
    };

    const resData = userRegister(payload);
    console.log(resData);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            {...register("username", { required: "Username is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
