import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const Root = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
