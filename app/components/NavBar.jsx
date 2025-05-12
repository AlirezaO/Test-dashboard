import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AuthButton from "./AuthButton";
import { auth } from "@/auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth();
  console.log(session);
  return (
    <Box sx={{ flexGrow: 1 }} className="w-full">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="my-test-class"
          >
            News
          </Typography>
          {session && session?.user ? (
            <Box className="flex gap-4 justify-center items-center">
              <Link href={`profile/users/${session?.user?.name}`}>
                {session?.user?.name}
              </Link>
              <AuthButton text="Logout" />
            </Box>
          ) : (
            <AuthButton text="Sign in with GitHub" />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
