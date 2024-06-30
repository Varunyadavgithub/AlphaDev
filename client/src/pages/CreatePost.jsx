import React from "react";
import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <>
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type="text" placeholder="Title" requited id="title" className="flex-1"/>
                <Select>
                    <option value="uncategorized">Select a category</option>
                    <option value="javaScript">JavaScript</option>
                    <option value="react">React.js</option>
                    <option value="dsa">DSA</option>
                    <option value="css">CSS</option>
                </Select>
            </div>
            <div className="flex gap-3 items-center justify-between border border-4 border-blue-500 border-dotted p-3">
                <FileInput typeof="file" accept="image/*"/>
                <Button type="button" gradientDuoTone='purpleToPink' size='sm'>Upload image</Button>
            </div>
            <ReactQuill theme="snow" placeholder="Write something..." className="h-72 mb-12" requited/>
            <Button type="submit" gradientDuoTone="purpleToBlue">Publish</Button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
