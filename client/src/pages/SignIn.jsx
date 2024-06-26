import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";
import { BiError } from "react-icons/bi";


const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
      <div className="my-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left-side */}
          <div className="flex-1 ">
            <Link to="/" className="text-4xl font-bold dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-purple-500  to-blue-500 rounded-lg text-white">
                Alpha
              </span>
              Dev
            </Link>
            <p className="text-sm mt-5 font-semibold">
              Welcome to AlphaDev. You can sign in with your email and password
              or with Google.
            </p>
          </div>

          {/* right-side */}
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Email ID" />
                <TextInput
                  type="email"
                  placeholder="alphadev@gmail.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="******"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                gradientDuoTone="purpleToBlue"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-2">
              <span className="font-semibold">Don't have an account?</span>
              <Link
                to="/signup"
                className="font-semibold underline text-blue-600"
              >
                Sign Up
              </Link>
            </div>
           
            {errorMessage && ( 
              <Alert className="mt-2 font-semibold" color="failure" icon={BiError}>
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
