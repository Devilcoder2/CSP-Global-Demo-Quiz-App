/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartTest = ({ provider, name, length }) => {
  const navigate = useNavigate();

  const isAllPresent = provider && name && length;

  const submitHandler = () => {
    console.log("Clicked");
    navigate("/livetest", { state: { provider, name, length } });
  };

  return (
    <Tooltip title={!isAllPresent ? "Please select all fields" : ""}>
      <span>
        <button
          disabled={!isAllPresent}
          onClick={submitHandler}
          className={`px-5 py-3 text-lg mt-10 font-semibold rounded-lg transition-transform duration-100 cursor-pointer
            ${
              !isAllPresent
                ? "bg-gray-400 hover:cursor-not-allowed"
                : "bg-[#696CFF] hover:bg-[#5c5ee7] active:translate-y-1 active:scale-95"
            }
          `}
        >
          Start Test
        </button>
      </span>
    </Tooltip>
  );
};

export default StartTest;
