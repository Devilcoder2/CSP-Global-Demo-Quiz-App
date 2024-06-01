import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-80">
        <Sidebar />
      </div>
      <div className="ml-80 h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </>
  );
};

export default App;
