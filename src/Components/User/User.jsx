import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./User.css";
import {userResult} from "../utils/constants.js"


const User = ({ theme = "dark" }) => {
  // Define theme colors
  const darkThemeStyles = {
    backgroundColor: "#2B2C40",
    headingColor: "#DBDBEB",
    paragraphColor: "#7F7F8F",
  };

  const lightThemeStyles = {
    backgroundColor: "white",
    headingColor: "black",
    paragraphColor: "black",
  };

  const styles = theme === "dark" ? darkThemeStyles : lightThemeStyles;
  const [resultSize, setResultSize] = useState(4);
  const navigate = useNavigate()
  const handleClick = ()=>{
    console.log(resultSize)
    setResultSize(prevResultSize => (prevResultSize === 4 ? userResult.length : 4));
    console.log(resultSize)
  }
  const handleImageClick = (index) => {
    navigate(`/user/result/${index}`);
  };
  return (
    <div
      style={{
        backgroundColor: styles.backgroundColor,
        overflowY: "auto",
        height: "100vh",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
      className="user-container"
    >
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center">
          <div className="lg:w-3/4">
            <div
              className="bg-black rounded-t text-white flex items-center"
              style={{ height: "200px" }}
            >
              <div
                className="ml-4 mt-36 flex flex-col"
                style={{ width: "150px" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Profile"
                  className="mt-4 mb-2 rounded-lg"
                  style={{ width: "150px" }}
                />
                <button className="rounded-lg font-semibold bg-gray-400 text-lg py-2 px-4 mt-4">
                  Edit profile
                </button>
              </div>
              <div className="ml-3 mt-5">
                <h5
                  className={`${
                    theme === "dark" ? "text-[#DBDBEB]" : "text-white"
                  }`}
                >
                  Full Name
                </h5>
                <p
                  className={`${
                    theme === "dark" ? "text-[#7F7F8F]" : "text-white"
                  }`}
                >
                  username
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-[#7F7F8F]" : "text-white"
                  }`}
                >
                  Country Name
                </p>
              </div>
            </div>
            <div
              className="p-4"
              style={{
                backgroundColor: theme === "dark" ? "#2B2C40" : "#f3f4f6",
                color: styles.paragraphColor,
              }}
            >
              <div className="flex justify-end text-center py-1">
                <div>
                  <p className="mb-1 text-2xl">23</p>
                  <p className="text-xs text-gray-500">Tests</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 text-2xl">98</p>
                  <p className="text-xs text-gray-500">Highest</p>
                </div>
                <div>
                  <p className="mb-1 text-2xl">104</p>
                  <p className="text-xs text-gray-500">Question</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-5">
                <p
                  className="text-xl font-normal mb-1"
                  style={{ color: styles.headingColor }}
                >
                  About
                </p>
                <div
                  className="p-4"
                  style={{
                    backgroundColor: theme === "dark" ? "#2B2C40" : "#f3f4f6",
                  }}
                >
                  <p
                    className="italic mb-1"
                    style={{ color: styles.paragraphColor }}
                  >
                    Bio
                  </p>
                  <p
                    className="italic mb-1"
                    style={{ color: styles.paragraphColor }}
                  >
                    Email
                  </p>
                  <p
                    className="italic mb-0"
                    style={{ color: styles.paragraphColor }}
                  >
                    Category
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p
                  className="text-xl font-normal mb-0"
                  style={{ color: styles.headingColor }}
                >
                  Result And Certificates
                </p>
                <button
                  onClick={handleClick}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "gray",
                  }}
                >
                  {resultSize <= 4 ? "Show all" : "Show less"}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
              {userResult.slice(0, resultSize).map((user, index) => (
                  <div key={index} className="mb-2">
                    <img
                      src={user.imgUrl}
                      alt={`image ${index + 1}`}
                      className="w-full rounded-lg cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
