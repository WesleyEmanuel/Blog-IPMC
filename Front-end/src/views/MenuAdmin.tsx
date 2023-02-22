import { useState } from "react";
import { FaBars, FaFileAlt, FaUserFriends, FaRegImages } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import logoIPMC from "../assets/images/logo_ipmc.png";

export const MenuAdmin = () => {
  // const [openSidebar, setOpenSidebar] = useState(false);

  // function handleSidebar(e) {
  //   e.preventDefault();
  //   setOpenSidebar(!openSidebar);
  // }

  const menuItems = [
    {
      label: "Artigos",
      path: "/admin/artigos",
      icon: <FaFileAlt className="mr-2" />,
    },
    {
      label: "Cards",
      path: "/admin/cards",
      icon: <FaRegImages className="mr-2" />,
    },
    {
      label: "Usuários",
      path: "/admin/usuarios",
      icon: <FaUserFriends className="mr-2" />,
    },
  ];
  return (
    <div className="flex items-start md:flex-col">
      <div id="mobile-sidebar">
        <button className="z-30 peer flex md:hidden fixed" id="button-sidebar">
          <FaBars className="m-5 text-xl text-greenAppColor" />
        </button>
        <div className="z-20 fixed top-0 -left-[60%] h-screen w-[60%] bg-greenAppColor shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className=" flex flex-col items-center pt-10 gap-3">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                className="w-[100%] text-center shadow hover:opacity-70 flex flex-col items-center"
              >
                <span className="flex items-center ml-5 text-[#f8fafc] text-lg m-3">
                  {item.icon} {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] m-auto py-5 px-20 items-center justify-between shadow-md hidden md:flex">
        <div>
          <img src={logoIPMC} alt="" className="w-20" />
        </div>
        <div className="w-[50%] flex justify-end gap-10">
          {menuItems.map((item) => (
            <Link to={item.path} className="hover:opacity-70 ">
              <span className="flex items-center text-greenAppColor text-md uppercase">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[100%] mx-20 my-5 ">
        <Outlet />
      </div>
    </div>
  );
};

// export const MenuAdmin = () => {
//   return (
//     <div className="h-screen flex items-end justify-end px-4 pb-6">
//       <button className="relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition"></button>
//       <div className="z-20 fixed top-0 -left-96 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200"></div>
//     </div>
//   );
// };
