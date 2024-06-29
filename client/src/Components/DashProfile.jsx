import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="max-w-lg mx-auto p-3 w-full">
        <h1 className="my-7 text-center text-3xl font-semibold">Profile</h1>
        <form className="flex flex-col">
          <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
            <img
              src={currentUser.profilePicture}
              alt="user-picture"
              className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
            />
          </div>

          <Label className="text-xl">Username</Label>
          <TextInput
            type="text"
            id="username"
            placeholder="username"
            defaultValue={currentUser.username}
            className="my-2"
          ></TextInput>

          <Label className="text-xl">Email Id</Label>
          <TextInput
            type="email"
            id="username"
            placeholder="email"
            defaultValue={currentUser.email}
            className="my-2"
          ></TextInput>

          <Label className="text-xl">Password</Label>
          <TextInput
            type="password"
            id="username"
            placeholder="password"
            className="my-2"
          ></TextInput>

          <Button type="submit" gradientDuoTone="purpleToBlue" className="my-2 text-xs">Update</Button>
          <div className="text-red-500 flex justify-between mt-3">
            <span className="cursor-pointer hover:underline">Delete Account</span>
            <span className="cursor-pointer hover:underline">Sign Out</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashProfile;
