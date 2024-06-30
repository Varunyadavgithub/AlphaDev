import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { FaRegUser } from "react-icons/fa6";
import { PiSignOut } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

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
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                active={tab === "profile"}
                icon={FaRegUser}
                label={"User"}
                labelColor="dark"
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={PiSignOut} onClick={handleSignout}>Sign Out</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default DashSidebar;
