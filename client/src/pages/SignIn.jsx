import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

const SignUp = () => {
  const [formData,setFormData]=useState({});
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setFormData({ ...formData,[e.target.id]:e.target.value.trim()});
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch('/api/v1/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
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
              Welcome to AlphaDev. You can sign up with your email and password
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
              <Button type='submit' gradientDuoTone="purpleToBlue" disabled={loading}>
                {
                  loading ? (
                    <>
                    <Spinner size='sm'/>
                    <span className="pl-3">Loading...</span>
                    </>
                  ) : 'Sign In'
                }
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-2">
              <span className="font-semibold">Don't have an account?</span>
              <Link
                to="/signin"
                className="font-semibold underline text-blue-600"
              >
                Sign Up
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className="mt-2 font-semibold" color='failure'>{errorMessage}</Alert>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
