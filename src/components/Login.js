import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = JSON.parse(localStorage.getItem("user")) || { email: '', password: '' };
    if (input.email === validUser.email && input.password === validUser.password) {
      localStorage.setItem('successful', true);
      navigate('/userHome');
    } else {
      setShowToast(true);
    }
  };

  const Toast = ({ message, setShowToast }) => {
    return (
      <div className="fixed top-0 right-0 m-4 bg-red-500 text-white px-4 py-2 rounded">
        <span>{message}</span>
        <button className="ml-2" onClick={() => setShowToast(false)}>
          X
        </button>
      </div>
    );
  };


  return (
    <>

      {showToast && <Toast message="Wrong email or password" setShowToast={setShowToast} />}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Sign In</span>
            <span className="font-light text-gray-400 mb-8">
              Welcome back! Please enter your details
            </span>
            <form onSubmit={handleLogin}>
              <div>
                <span className="mb-2 text-md">Email</span>
                <input
                  type='text'
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type='password'
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <button
                type='submit'
                className="mt-5 w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
              >
                Sign in
              </button>
            </form>
            <div className="text-center text-gray-400">
              Don't have an account?
              <Link className="font-bold text-black p-2" to="/registration">Sign up for free</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;