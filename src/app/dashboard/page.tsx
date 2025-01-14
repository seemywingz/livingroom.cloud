// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import TopBar from "../components/TopBar";
import { Box } from "@mui/material";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  // If not logged in, redirect to /
  if (!session) {
    redirect("/");
  }

  return (
    <Box>
      <TopBar session={session} />
      <h1>Dashboard</h1>
    </Box>
  );
}
