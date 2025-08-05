import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
