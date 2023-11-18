import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="h-[250px] w-full flex justify-center items-center bg-blue-500">
      <div>
        <div className="flex">
          💗
          <h1 className="footer text-white text-[20px] mx-15px">
            تم صنع هذة المنصة بهدف تهيئة الطالب لجميع جوانب الثانوية العامة وما
            بعدها
          </h1>
          💗
        </div>
        <div className="flex justify-center mt-[30px]">
          <div>
            <a href="#" style={{ margin: "10px" }}>
              <YouTubeIcon style={{ fontSize: "50px", color: "red" }} />
            </a>
            <a href="#" style={{ margin: "10px" }}>
              <FacebookIcon style={{ fontSize: "40px", color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
