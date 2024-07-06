import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center text-center rounded-tl-3xl rounded-br-3xl">
        <div className="flex-1 justify-center flex flex-col">
          <h2 className="text-2xl">Want to learn more about JavaScript</h2>
          <p className="text-gray-500 my-2">Checkout these resources</p>
          <Button gradientDuoTone="purpleToBlue" className="rounded-tl-xl rounded-bl-none">
            <a href="#" target="-blank" rel="noopener noreferrer">
              Learn more
            </a>
          </Button>
        </div>
        <div className="p-7">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
