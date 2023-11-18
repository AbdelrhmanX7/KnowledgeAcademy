import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

interface LogInProps {}
const Login: React.FC<LogInProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-[500px] mt-[50px] "
        style={{
          boxShadow:
            " 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-center my-5">
          <h1>
            {" "}
            تسجيل <span style={{ color: "red" }}> الدخول </span>
          </h1>
        </div>
        <div className="">
          <div className="flex justify-center">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[90%] mx-auto my-5"
              id="outlined-basic"
              label={
                <div>
                  <AlternateEmailIcon style={{ color: "#0079d9" }} />
                  email
                </div>
              }
              variant="outlined"
            />
          </div>
          <div className="flex justify-center">
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[90%] mx-auto my-5"
              id="outlined-basic"
              label={
                <div>
                  <LockIcon style={{ color: "#0079d9" }} />
                  password
                </div>
              }
              type="password"
              variant="outlined"
            />
          </div>
          <div className="flex justify-center my-5">
            <Button> تسجيل الدخول </Button>
          </div>
          <div className="flex m-5" style={{ direction: "rtl" }}>
            <h3 className="m-1"> لا يوجد لديك حساب ؟ </h3>{" "}
            <Link href="/signup">
              <span className="text-[20px] text-red-500 m-1">
                {" "}
                انشئ حسابك الان !{" "}
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
