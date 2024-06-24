import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <>
      <Footer container className="border border-t-8 border-blue-600">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
                  Alpha
                </span>
                Dev
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://varunyadavgithub.github.io/Portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:underline"
                  >
                    My Protfolio
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:underline"
                  >
                    AlphaDev
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/Varunyadavgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:underline"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.linkedin.com/in/varunyadavcse25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="hover:text-blue-600 hover:underline">Privacy Policy</Footer.Link>
                  <Footer.Link href="#" className="hover:text-blue-600 hover:underline">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="/" by="AlphaDev" year={new Date().getFullYear()} />
            <div className="mt-4 flex gap-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://x.com/varun_yadav01" target="_blank" rel="noopener noreferrer" icon={BsTwitter} />
              <Footer.Icon href="https://github.com/Varunyadavgithub" target="_blank" rel="noopener noreferrer" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsInstagram} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComp;
