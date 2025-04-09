import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Dentsu World Services</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
