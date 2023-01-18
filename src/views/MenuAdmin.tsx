import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export const MenuAdmin = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  function handleSidebar(e) {
    e.preventDefault();
    setOpenSidebar(!openSidebar);
  }

  const menuItems = [
    { label: "Artigos", path: "/admin/artigos" },
    { label: "Usuários", path: "/admin/usuarios" },
  ];
  return (
    <div className="flex items-start">
      {openSidebar && (
        <div className="w-[20vw] h-[100vh] bg-greenAppColor flex flex-col items-center pt-5 gap-3">
          {menuItems.map((item) => (
            <Link to={item.path} className="w-[100%] text-center shadow">
              <span className="text-[#f8fafc] text-xl ">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
      <button onClick={handleSidebar}>
        <FaBars className="m-5 text-xl" />
      </button>
      <div className=" w-[100%] h-[100vh] p-10">
        <Outlet />
      </div>
    </div> //
  );
};
