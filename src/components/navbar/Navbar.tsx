import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button } from "../../UI/Button";
import { useReadLocalStorage } from "usehooks-ts";

const Navbar = () => {
  const user = useReadLocalStorage<any>("user");
  const [userData, setUserData] = useState<any>({});
  useEffect(() => setUserData(user), []);
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
          <>
            {userData?.username ? (
              <p>Welcome: {userData?.username}</p>
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
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
