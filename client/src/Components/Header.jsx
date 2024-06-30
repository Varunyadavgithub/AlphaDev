import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { RxDashboard } from "react-icons/rx";
import { PiSignOut } from "react-icons/pi";
import {signoutSuccess} from "../redux/user/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout=async ()=>{
    try {
      const res=await fetch('/api/v1/user/signout',{
        method:'POST',
      });
      const data=await res.json();
      if (!res.ok) {
        console.log(data.message);
      }else{
        dispatch(signoutSuccess())
      }
    } catch (error) {
      console.log(error.message)
    }
  }

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

        <div className="flex gap-4 md:order-2">
          <Button
            className="w-10 h-9"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaMoon /> : <LuSun />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header className="hover:cursor-default">
                <span className="block text-sm font-bold text-center">
                  {currentUser.username}
                </span>
                <span className="block text-sm font-semibold truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item icon={RxDashboard}>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item icon={PiSignOut} onClick={handleSignout}>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/signin">
              <Button outline gradientDuoTone="purpleToBlue">
                SignIn
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About Us</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
