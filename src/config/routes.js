import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layouts";
import Home from "../pages";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import CardComponent from "../pages/CardComponent";
import Share from "../pages/share";
import ForgetPassword from "../pages/ForgetPassword";

export const ROUTES = [
  {
    path: "/",
    key: "layout",
    component: <HomeLayout />,
    routes: [
      {
        path: "/ForgetPassword",
        key: "forgetPassword",
        component: <ForgetPassword />,
      },
      {
        path: "/share",
        key: "share",
        component: <Share />,
      },
      {
        path: "/CardComponent",
        key: "CardComponent",
        component: <CardComponent />,
      },
      {
        path: "/signUp",
        key: "signUp",
        component: <SignUp />,
      },
      {
        path: "/signIn",
        key: "signIn",
        component: <SignIn />,
      },
      {
        path: "/",
        key: "home",
        component: <Home />,
      },
    ],
  },
];

export function RenderRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component}>
          {route.routes
            ? route.routes.map((nestedRoute) => (
                <Route
                  key={nestedRoute.key}
                  path={nestedRoute.path}
                  element={nestedRoute.component}
                />
              ))
            : null}
        </Route>
      ))}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
