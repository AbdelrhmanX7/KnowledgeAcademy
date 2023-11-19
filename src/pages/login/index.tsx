import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@/UI";
import Link from "next/link";
import { useLogin } from "@/Services/Hooks";
import { useLocalStorage } from "usehooks-ts";
import { setCookie } from "cookies-next";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [formState, setFormState] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [_, setUserData] = useLocalStorage("user", {});
  const { mutateAsync: loginFn } = useLogin();
  const { email, password } = formState;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] p-6 flex flex-col gap-7 mt-10 border rounded-lg shadow-md">
        <div className="flex justify-center">
          <h1>تسجيل دخول</h1>
        </div>
        <TextField
          value={email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          className="w-full mx-auto"
          id="outlined-basic"
          label={<div>Email</div>}
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          className="w-full mx-auto"
          id="outlined-basic"
          label={<div>Password</div>}
          type="password"
          variant="outlined"
        />
        <Button
          onClick={async () => {
            try {
              const res = await loginFn(formState);
              setCookie("token", res?.token);
              setUserData(res?.user);
              toast.success("تم تسجيل الدخول بنجاح");
              router.push("/");
            } catch (error: any) {
              toast.error(error?.response?.data);
            }
          }}
        >
          {" "}
          تسجيل الدخول{" "}
        </Button>
        <Link className="text-lg font-medium underline" href="/signup">
          ! انشاء حساب جديد
        </Link>
      </div>
    </div>
  );
}
