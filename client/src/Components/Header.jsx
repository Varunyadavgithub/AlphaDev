import React from "react";
import { Button, Navbar,  TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
    const path=useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
            Alpha
          </span>
          Dev
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-10 h-9 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <Button className="w-10 h-9" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/signin">
            <Button outline gradientDuoTone="purpleToBlue">SignIn</Button>
          </Link>
          <Navbar.Toggle />
          </div>
       <Navbar.Collapse>
        <Navbar.Link active={path==='/'} as={'div'}>
            <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/about'} as={'div'}>
            <Link to='/about'>About Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/projects'} as={'div'}>
            <Link to='/projects'>Projects</Link>
        </Navbar.Link>
       </Navbar.Collapse>
              
      </Navbar>
    </>
  );
};

export default Header;
