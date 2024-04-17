import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!input.name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!input.email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!input.email.includes('@') || !input.email.includes('.')) {
      setEmailError('Email must contain "@" and "."');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!input.password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(input.password)) {
      setPasswordError('Password must contain at least 1 numeric digit, 1 uppercase, 1 lowercase letter and 1 special character, and be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      localStorage.setItem('user', JSON.stringify(input));
      navigate('/');
    } else {
      setShowToast(true);
    }
  };

  const Toast = ({ message }) => {
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
      {showToast && <Toast message={nameError || emailError || passwordError} />}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Sign Up</span>
            <span className="font-light text-gray-400 mb-8">
              Please enter your details to create an account
            </span>
            <form onSubmit={handleSubmit} id="myForm">
              <div>
                <span className="mb-2 text-md">Name</span>
                <input
                  type='text'
                  name="name"
                  value={input.name}
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
              
              <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;