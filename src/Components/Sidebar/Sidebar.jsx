import FeedIcon from "@mui/icons-material/Feed";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonIcon from "@mui/icons-material/Person";

const Sidebar = () => {
  return (
    <div>
      <div className="h-[100vh] w-72 bg-white">
        <div className="text-gray-500 text-2xl font-bold">LOGO</div>
        <div>
          <FeedIcon />
          Paper
        </div>
        <div>
          <SchoolOutlinedIcon />
          Practice Test
        </div>
        <div>
          <PersonIcon />
          User
        </div>
        <div>Live Support</div>
      </div>
    </div>
  );
};

export default Sidebar;
