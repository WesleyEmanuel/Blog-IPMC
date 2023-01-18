import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { LoginService } from "../services/login";
import { useNavigate } from "react-router-dom";
import { setLoggedUser } from "../redux/loggedUserSlice";

export const Login = () => {
  // const loginService = new LoginService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispach = useDispatch();
  const [test, setTest] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    if (test) {
      return navigate("/admin");
    }
  }, [test]);

  async function login(event) {
    event.preventDefault();

    setTest(true);

    // const user = {
    //   email,
    //   password,
    // };

    // const result = await loginService.login(user);

    // console.log(result);
    dispach(
      setLoggedUser({
        email: "result.user.email",
        id: 8,
        // result.user.id,
        name: "result.user.name",
        token: "result.token",
      })
    );
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form
      onSubmit={login}
      className="flex flex-col items-center gap-4 h-[60vh] mt-[8rem]"
    >
      <h1 className="text-4xl text-greenAppColor font-bold">Login</h1>
      <div className="flex flex-col gap-4 w-[20rem]">
        <div className="flex items-center gap-2 border-2 rounded-lg px-2">
          <FaUserAlt className="text-greenAppColor" />
          <input
            placeholder="email"
            value={email}
            onChange={handleChangeEmail}
            type="text"
            className="p-2 w-[100%] focus:bg-inherit outline-none border-"
          />
        </div>

        <div className="flex items-center gap-2 border-2 rounded-lg px-2">
          <FaLock className="text-greenAppColor" />
          <input
            placeholder="senha"
            onChange={handleChangePassword}
            value={password}
            type="password"
            prefix=""
            className="p-2 w-[100%] focus:bg-inherit outline-none border-none"
          />
        </div>

        <button
          type="submit"
          className="bg-greenAppColor w-80 self-end p-2 rounded-md text-white font-semibold hover:bg-darkGreenAppColor"
        >
          Login
        </button>
      </div>
    </form>
  );
};
