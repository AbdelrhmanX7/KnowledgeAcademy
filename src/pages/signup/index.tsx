import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, phone, password, passwordConfirmation);
  };
  return (
    <div className="flex justify-center items-center ">
      <form
        className="w-[500px] m-[50px] mt-[120px] "
        style={{
          boxShadow:
            " 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex justify-center my-5">
          <h1>
            {" "}
            انشاء <span style={{ color: "red" }}> حساب جديد </span>
          </h1>
        </div>
        <div className="">
          <div className="flex justify-center">
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[90%] mx-auto my-5"
              id="outlined-basic"
              label={
                <div>
                  <PersonIcon style={{ color: "#0079d9" }} />
                  name
                </div>
              }
              variant="outlined"
            />
          </div>
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[90%] mx-auto my-5"
              id="outlined-basic"
              label={
                <div>
                  <PhoneIcon style={{ color: "#0079d9" }} />
                  phone
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
          <div className="flex justify-center">
            <TextField
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-[90%] mx-auto my-5"
              id="outlined-basic"
              label={
                <div>
                  <LockIcon style={{ color: "#0079d9" }} />
                  password_confirmation
                </div>
              }
              type="password"
              variant="outlined"
            />
          </div>
          <div className="flex justify-center">
            <Select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-[90%] mx-auto my-5"
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="اختر الصف الدراسى "
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </div>
          <div className="flex justify-center my-5">
            <Button>! انشئ الحساب </Button>
          </div>
          <div className="flex m-5" style={{ direction: "rtl" }}>
            <h3 className="m-1"> يوجد لديك حساب بالفعل ؟</h3>
            <Link href="/login">
              <span className="text-[20px] text-red-500 m-1">
                {" "}
                ادخل إلى حسابك الآن !
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
