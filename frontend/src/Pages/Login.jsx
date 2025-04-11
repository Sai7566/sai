import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../tempContext/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [curState, setCurState] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (curState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-center text-2xl font-bold mb-6">
          {curState === "Sign Up" ? "Sign Up" : "Login"}
        </h3>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          {curState === "Sign Up" && (
            <div className="w-full">
              <label htmlFor="name" className="text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg bg-white text-black mt-2"
                required
              />
            </div>
          )}
          <div className="w-full">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg bg-white text-black mt-2"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg bg-white text-black mt-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {curState === "Sign Up" ? "Sign Up" : "Login"}
          </button>
          <div className="w-full text-center mt-4">
            {curState === "Login" ? (
              <div>
                Don't have an account?{" "}
                <span
                  onClick={() => setCurState("Sign Up")}
                  className="text-blue-600 cursor-pointer"
                >
                  Create Account
                </span>
              </div>
            ) : (
              <div>
                Already have an account?{" "}
                <span
                  onClick={() => setCurState("Login")}
                  className="text-blue-600 cursor-pointer"
                >
                  Login
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



