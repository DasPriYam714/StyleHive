import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { assets } from "../assets/assets";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <div className="w-full  lg:absolute inset-0 sm:w-1/2  overflow-y-hidden ">
        <img
          src={assets.part1}
          alt="Login page image"
          className="object-cover w-full "
        />
      </div>
      <form onSubmit={handleLogin}>
        <div className="bg-white py-8 w-full md:w-1/2 h-auto lg:absolute inset-y-0 right-0  mt-15 p-10 md:p-20">
          <div className="mt-10 flex justify-center ">
            <p className="text-3xl mb-2">
              Style<span className="text-blue-600">Hive</span>
            </p>
          </div>
          <h1 className="font-roboto text-xl md:text-2xl font-normal text-center mb-6 text-[#2A6B53]">
            Welcome, login to your Account.
          </h1>

          <div>
            <input
              className="peer border-b border-[#393939] py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5"
              type="text"
              placeholder="Username"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              required
            />
          </div>

          <input
            className="peer border-b border-[#393939] py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />

          <div className="flex flex-col md:flex-row items-center justify-between mb-6 mt-6">
            <div className="flex flex-col lg:flex-row items-center">
              <input id="remember-me" type="checkbox" className="checkbox-md" />
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-700 ml-2"
              >
                I agree to the{" "}
                <a className="underline cursor-pointer">Terms & Policy</a>
              </label>
            </div>
            <a className="text-sm text-primary-600 hover:underline text-[#3e42a4]">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-[#4d4c5ed3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Login
          </button>

          <section className="lg:mx-20 mt-15">
            <div className="divider mt-4">Or</div>
            <hr className="w-full mt-4" />
            <div className="flex flex-col lg:flex-row">
              <div className="border-2 rounded py-4 border-[#8f91b9] w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0 md:mr-2">
                <div className="mr-2">
                  <FaApple color="black" size={23} />
                </div>
                <div>
                  <h4 className="font-semibold">Login with Apple account</h4>
                </div>
              </div>
              <div className="border-2 rounded py-4 border-[#8f91b9] w-full md:w-1/2 flex justify-center items-center">
                <div>
                  <FaGoogle size={23} />
                </div>
                <div>
                  <h4 className="font-semibold ml-2">Login with Google</h4>
                </div>
              </div>
            </div>

            <section className="flex flex-col  p-5 justify-center">
              <div>
                <label htmlFor="account" className="text-sm text-gray-700 ml-2">
                  Have an account yet?
                </label>
              </div>
              <div>
                <Link to={"/signup"}>
                  <p className="text-sm text-primary-600 hover:underline text-[#3e42a4] font-semibold ps-2">
                    Sign Up!
                  </p>
                </Link>
              </div>
            </section>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Login;
