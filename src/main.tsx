import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MenuAdmin } from "./views/MenuAdmin";
import { Artigos } from "./views/Artigos";
import { Usuarios } from "./views/Usuarios";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { PrivateRoute } from "./views/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <MenuAdmin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "artigos",
        element: <Artigos />,
      },
      {
        path: "usuarios",
        element: <Usuarios />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="flex justify-center text-4xl items-center h-[60vh]">
        <h1>Not Found</h1>
      </div>
    ),
  },
  {
    path: "admin/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <div className="fixed bottom-0 w-[100vw] text-center p-1 text-xs">
        <h1>
          Development by <a href="">Wesley Emanuel</a>
        </h1>
      </div>
    </Provider>
  </React.StrictMode>
);
