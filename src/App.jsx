import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";

const App = () => {
  const [isNotificationSelected, setIsNotificationSelected] = useState(false);
  const [isNightMode, setIsNightMode] = useState(true);
  const [isAccountSelected, setIsAccountSelected] = useState(false);

  const notificationHandler = () => {
    setIsNotificationSelected((prev) => !prev);
  };

  const nightModeHandler = () => {
    setIsNightMode((prev) => !prev);
  };

  const accountHandler = () => {
    setIsAccountSelected((prev) => !prev);
  };

  return (
    <div className=" overflow-y-hidden">
      <div className="fixed top-0 left-0 h-full w-80">
        <Sidebar />
      </div>

      <div className="bg-[#2B2C40]  text-[#DBDBEB] px-4  overflow-y-hidden w-[200px] ml-[1270px] mb-6 mt-[20px] h-16 rounded-lg flex space-x-5 justify-center ">
        <div
          className="pt-3 hover:cursor-pointer"
          onClick={notificationHandler}
        >
          {isNotificationSelected ? (
            <NotificationsNoneIcon fontSize="large" />
          ) : (
            <NotificationsIcon fontSize="large" />
          )}
        </div>

        <div className="pt-3 hover:cursor-pointer" onClick={nightModeHandler}>
          {isNightMode ? (
            <DarkModeOutlinedIcon fontSize="large" />
          ) : (
            <LightModeIcon fontSize="large" />
          )}
        </div>
        <div className="pt-3 hover:cursor-pointer" onClick={accountHandler}>
          {isAccountSelected ? (
            <AccountCircleIcon fontSize="large" />
          ) : (
            <AccountCircleOutlinedIcon fontSize="large" />
          )}
        </div>
      </div>

      <div className="ml-80 h-[100vh] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
