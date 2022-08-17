import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/category/search/keyword" element={<Catalog />} />
        <Route path="/category/search/id" element={<Detail />} />
        <Route path="/category" element={<Catalog />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
