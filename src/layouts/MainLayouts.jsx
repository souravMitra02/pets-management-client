import React from "react";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div>
      <header></header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayouts;
