import { useState } from "react";
import "./App.css";
import "./index.css";
import Registration from "./Components/Registration";
import ProductList from "./Components/ProductList";
import AuctionForm from "./Components/AuctionForm";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  // Link,
  // NavLink,
  RouterProvider
} from "react-router-dom";
import Layout from "./Components/Layout";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SideNavBar } from "./Components/SideNavBar";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="register" element={<Registration />} />
      <Route path="login" element={<Login />}>
      </Route>
      <Route path="loggedIn" element={<SideNavBar />}>
          <Route path="ProductList" element={<ProductList />} />
        </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <MainPage /> */}
      <RouterProvider router={router} />
      {/* <Card /><Button /> */}
      {/* <AuctionForm /> */}
      {/* <Layout /> */}
      {/* <ProductList /> */}
    </>
  );
}

export default App;
