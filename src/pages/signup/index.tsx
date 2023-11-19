import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@/UI/Button/Button";
import Link from "next/link";
import { useSignup } from "@/Services/Hooks";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
  });

  const { username, email, phone, password, passwordConfirmation } = formState;

  const { mutateAsync: signupFn, isPending } = useSignup();

  const [, setUserData] = useLocalStorage("user", {});

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-6 gap-6 w-[500px] mb-10 mt-32 rounded-lg border shadow-sm">
        <h1> انشاء حساب جديد</h1>
        <TextField
          value={username}
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
          id="outlined-basic"
          label={<div>name</div>}
          variant="outlined"
          className="w-full"
        />
        <TextField
          value={email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          id="outlined-basic"
          label={<div>email</div>}
          variant="outlined"
          className="w-full"
        />
        <TextField
          value={phone}
          onChange={(e) =>
            setFormState({ ...formState, phone: e.target.value })
          }
          id="outlined-basic"
          label={<div>phone</div>}
          variant="outlined"
          className="w-full"
        />
        <TextField
          value={password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          id="outlined-basic"
          label={<div>Password</div>}
          type="password"
          variant="outlined"
          className="w-full"
        />
        <TextField
          value={passwordConfirmation}
          onChange={(e) =>
            setFormState({
              ...formState,
              passwordConfirmation: e.target.value,
            })
          }
          id="outlined-basic"
          label={<div>Password Confirmation</div>}
          type="password"
          variant="outlined"
          className="w-full"
        />
        <div className="flex justify-center ">
          <Button
            isLoading={isPending}
            disabled={
              !username ||
              !email ||
              !phone ||
              !password ||
              !passwordConfirmation
            }
            onClick={async () => {
              try {
                const res = await signupFn(formState);
                setCookie("token", res?.token);
                setUserData(res?.user);
                toast.success("تم تسجيل الدخول بنجاح");
                router.push("/");
              } catch (error: any) {
                toast.error(JSON.stringify(error?.response?.data));
              }
            }}
            label="انشاء حساب جديد"
          />
        </div>
        <div className="flex m-5" style={{ direction: "rtl" }}>
          <p className="m-1 text-[#00000099] font-normal">
            {" "}
            يوجد لديك حساب بالفعل ؟
          </p>
          <Link href="/login">
            <span className="text-xl font-semibold text-[#3da3f6] m-1">
              {" "}
              ادخل إلى حسابك الآن !
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
