import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button } from "../UI/Button";

const Navbar = () => {
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
          <Link href="/login">
            <Button> log in</Button>
          </Link>
          <Link href="/signup">
            <Button> sign up </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
