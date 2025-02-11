// src/app/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SignInButton from "./components/SignInButton";
import GitHubButton from "./components/GitHubButton";
import ThreeScene from "./three/Scene";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box sx={{ flexGrow: 1 }} />
        <SignInButton />
        <GitHubButton />
      </Box>
      <Box margin={"18%"} textAlign="center">
        <Typography variant="h2" gutterBottom>
          Living Room Cloud
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Cloud Behind The Couch
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50vh",
          }}
        >
          <ThreeScene color={0x0afffb} alpha={true} />
        </Box>
      </Box>
    </Box>
  );
}
