import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button } from "../../UI/Button";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { setCookie } from "cookies-next";

const Navbar = () => {
  const [user, setUser] = useLocalStorage<any>("user", {});
  const [userData, setUserData] = useState<any>({});
  useEffect(() => setUserData(user), [user]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            style={{ color: "#0079d9" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link href="/">Knowledge Academy</Link>
          </Typography>
          <div className="flex gap-4">
            {userData?.username ? (
              <>
                <p>Welcome: {userData?.username}</p>
                <Button
                  onClick={() => {
                    setUser({});
                    setCookie("token", "");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
