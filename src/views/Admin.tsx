import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Admin = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  function handleSidebar(e) {
    e.preventDefault();
    setOpenSidebar(!openSidebar);
    console.log(openSidebar);
  }

  const menuItems = [
    { label: "Artigos", path: "/" },
    { label: "Usuários", path: "/" },
  ];
  return (
    <div className="flex items-start">
      {openSidebar && (
        <div className="w-[18vw] h-[100vh] bg-greenAppColor flex flex-col items-center pt-5 gap-3">
          {menuItems.map((item) => (
            <Link to={item.path} className="w-[100%] text-center shadow">
              <span className="text-[#f8fafc] text-2xl ">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
      <button onClick={handleSidebar}>
        <FaBars className="m-1 text-xl" />
      </button>
    </div>
  );
};
