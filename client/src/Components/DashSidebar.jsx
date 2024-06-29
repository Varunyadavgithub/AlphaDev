import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { FaRegUser } from "react-icons/fa6";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

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
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={LiaSignOutAltSolid}>Sign Out</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default DashSidebar;
