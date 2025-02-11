// src/app/components/TopBar.tsx
"use client";

import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { Session } from "next-auth";
import DonateButton from "./DonateButton";
import SignOutButton from "./SignOutButton";
import Cloud from "../three/Cloud";

interface TopBarProps {
  session: Session;
}

export default function TopBar({ session }: TopBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Avatar
              src={session.user?.image || ""}
              alt={session.user?.name || ""}
              sx={{ marginRight: 2 }}
            />
            <Typography variant="h6" component="div">
              Welcome, {session.user?.name}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ width: "100px", height: "90px" }}>
              <Cloud alpha={true} />
            </Box>
            <DonateButton />
            <SignOutButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
