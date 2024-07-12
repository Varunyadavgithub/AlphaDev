import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-3 text-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-center my-7">
              About{" "}
              <span className="text-white p-2 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 to-purple-500">
                Alpha Dev
              </span>
            </h1>
            <div className="text-xl text-gray-500 flex flex-col gap-6">
              <p>
                Welcome to Alpha Dev Blog! This blog website was created by Varun Yadav
                as a personal project to share my thoughts and ideas with the
                world. Varun is a passionate developer who loves to write about
                technology, coding, and everything in between.
              </p>
              <p>
                On this blog website, you'll find weekly articles and tutorials on
                topics such as web development, software engineering, and
                programming languages. Varun is always learning and exploring
                new technologies, so be sure to check back often for new
                content!
              </p>
              <p>
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other people's comments and reply to
                them as well. We believe that a community of learners can help
                each other to grow and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
