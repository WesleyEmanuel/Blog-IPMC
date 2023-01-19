import { useState } from "react";
import { FaBars, FaFileAlt, FaUserFriends, FaRegImages } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export const MenuAdmin = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  function handleSidebar(e) {
    e.preventDefault();
    setOpenSidebar(!openSidebar);
  }

  const menuItems = [
    {
      label: "Artigos",
      path: "/admin/artigos",
      icon: <FaFileAlt className="mr-5 text-xl" />,
    },
    {
      label: "Cards",
      path: "/admin/cards",
      icon: <FaRegImages className="mr-5" />,
    },
    {
      label: "Usuários",
      path: "/admin/usuarios",
      icon: <FaUserFriends className="mr-5" />,
    },
  ];
  return (
    <div className="flex items-start md:flex-col">
      <div id="mobile-sidebar">
        {openSidebar && (
          <div className="w-[65vw] h-[100vh] bg-greenAppColor flex flex-col items-center pt-5 gap-3 md:hidden">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                className="w-[100%] text-center shadow hover:opacity-70"
              >
                <span className="flex items-center ml-5 text-[#f8fafc] text-lg m-3">
                  {item.icon} {item.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleSidebar}
        className="flex md:hidden"
        id="button-sidebar"
      >
        <FaBars className="m-5 text-xl" />
      </button>
      <div className="flex w-[100vw] m-auto py-3 px-20 items-center justify-between bg-greenAppColor text-[#fff] hidden md:flex">
        <div>
          <h1>IPMC</h1>
        </div>
        <div className="w-[30%] flex justify-around">
          {menuItems.map((item) => (
            <Link to={item.path} className="hover:opacity-70">
              <span className="text-greenAppColor text-[#fff] text-lg">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className=" w-[100%] h-[100vh] p-10">
        <Outlet />
      </div>
    </div> //
  );
};
