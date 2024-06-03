import FeedIcon from "@mui/icons-material/Feed";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LIVE_SUPPORT_IMG_URL } from "../utils/constants";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const clickHandler = (url, index) => {
    setSelected(index);
    navigate(url);
  };

  return (
    <div className="">
      <div className="h-[100vh] text-[#DBDBEB]  fixed w-72 bg-[#2B2C40]">
        <div className="  text-2xl  ml-8 flex font-bold mb-7">
          <svg
            width="22"
            height="32"
            viewBox="0 0 55 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-6 mr-2"
          >
            <path
              fill="currentColor"
              d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"
            ></path>
            <path
              fillOpacity="0.2"
              fill="#FFF"
              d="M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z"
            ></path>
            <path
              fillOpacity="0.2"
              fill="#FFF"
              d="M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z"
            ></path>
          </svg>
          <h1 className="mt-6 text-2xl">Sneat</h1>
        </div>

        <div className=" space-y-3 mt-4">
          <div className="flex h-12 ">
            <div
              onClick={() => {
                clickHandler("/papers", 0);
              }}
              className={`hover:cursor-pointer flex ml-4 w-56 text-xl pt-2 px-4 space-x-2 rounded-lg  ${
                selected === 0 ? "bg-[#696CFF]" : "hover:bg-[#303145]"
              }`}
            >
              <div>
                <FeedIcon fontSize="medium" />
              </div>
              <div className="mt-[2px]">Paper</div>
            </div>
            {selected === 0 && (
              <div className="bg-[#696CFF] w-2 rounded-lg h-12 ml-10"></div>
            )}
          </div>

          <div className="flex h-12 ">
            <div
              onClick={() => {
                clickHandler("/test", 1);
              }}
              className={`hover:cursor-pointer flex ml-4 w-56 text-xl pt-2 px-4 space-x-2 rounded-lg  ${
                selected === 1 ? "bg-[#696CFF]" : "hover:bg-[#303145]"
              }`}
            >
              <div>
                <SchoolOutlinedIcon fontSize="medium" />
              </div>
              <div className="mt-[2px]">Practice Test</div>
            </div>
            {selected === 1 && (
              <div className="bg-[#696CFF] w-2 rounded-lg h-12 ml-10"></div>
            )}
          </div>

          <div className="flex h-12 ">
            <div
              onClick={() => {
                clickHandler("/user", 2);
              }}
              className={`hover:cursor-pointer flex ml-4 w-56 text-xl pt-2 px-4 space-x-2 rounded-lg  ${
                selected === 2 ? "bg-[#696CFF]" : "hover:bg-[#303145]"
              }`}
            >
              <div>
                <PersonIcon fontSize="medium" />
              </div>
              <div className="mt-[2px]">User</div>
            </div>
            {selected === 2 && (
              <div className="bg-[#696CFF] w-2 rounded-lg h-12 ml-10"></div>
            )}
          </div>

          <div className="ml-4 absolute bottom-28">
            <img src={LIVE_SUPPORT_IMG_URL} alt="" className="h-40 ml-4" />
            <div>
              <h6 className=" ml-16 mb-4 mt-6 text-lg opacity-50 hover:cursor-pointer">
                Need Help?
              </h6>
              <button className="bg-[#696CFF] py-2 ml-14 px-3 rounded-md text-white relative overflow-hidden shadow-lg hover:translate-y-1 transition-transform shadow-[#696cfffa]">
                Live Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
