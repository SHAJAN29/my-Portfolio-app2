import { Box, Typography } from "@mui/material";
import { ReapeateableData } from "./ThirdSection";

export function FourthSection() {
  const ForthSecData = [
    {
      title: "Detailed oriented",
      midContent: "Keen Eye for Spotting Small Details.",
      content:
        "Awareness to ease of access, User Interface consistency, and improved User Experience.",
    },
    {
      title: "Pretty & Optimized",
      midContent: "Comprehensible and Optimized Code.",
      content:
        "Writing clean code is a top priority while keeping it as optimized as possible.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        paddingBottom: "10rem",
      }}
    >
      {ForthSecData.map((ele) => (
        <ReapeateableData
          title={ele.title}
          midContent={ele.midContent}
          content={ele.content}
        />
      ))}
    </Box>
  );
}
