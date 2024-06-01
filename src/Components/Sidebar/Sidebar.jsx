import FeedIcon from "@mui/icons-material/Feed";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const clickHandler = (url) => {
    navigate(url);
  };

  return (
    <div>
      <div className="h-[100vh] w-72 bg-white">
        <div className="text-gray-500 text-2xl font-bold">LOGO</div>
        <div
          onClick={() => {
            clickHandler("/papers");
          }}
          className="hover:cursor-pointer"
        >
          <FeedIcon />
          Paper
        </div>
        <div
          onClick={() => {
            clickHandler("/test");
          }}
          className="hover:cursor-pointer"
        >
          <SchoolOutlinedIcon />
          Practice Test
        </div>
        <div
          onClick={() => {
            clickHandler("/user");
          }}
          className="hover:cursor-pointer"
        >
          <PersonIcon />
          User
        </div>
        <div>Live Support</div>
      </div>
    </div>
  );
};

export default Sidebar;
