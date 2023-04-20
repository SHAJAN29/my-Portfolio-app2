import { Box, List, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NavColor } from "../../App";
import { Lens } from "@mui/icons-material";

const Experience = () => {
  const greenClr = useContext(NavColor);

  const companyDetails = [
    {
      companyTitle: "Full-Stack-Developer",
      role: "Student",
      company: "@Guvi Geeks And Network (present)",
      list1: "Creating React components for the application dashboard.",
      list2: "Creating a Full-Stack-Movie App with CRUD Function.",
      list3: "Developing the Applications with full functionalaty CRUD App.",
    },

    {
      companyTitle: "Photographer",
      role: "Freelance Photographer",
      company: "@ Mj_Studioz (present)",
      list1: "Maintaining and managing photography equipment.",
      list2: "Capturing the Mood of the Ambiance.",
      list3:
        "They identify relevant images, edit photos to make them more appealing",
    },

    {
      companyTitle: "Video Editor",
      role: "Editor",
      company: "@Prasad Corp Pvt Ltd.(2018 - 2020)",
      list1: "Manage camera footage, dialogue to produce a  video product. ",
      list2: "Raw material to create a shot decision list based on scenes.",
      list3:
        "Manipulating and editing film pieces in a way that is invisible to the audience.",
    },
  ];

  const ComapnyData = ({ ele }) => {
    const { companyTitle, role, company, list1, list2, list3 } = ele;

    return (
      <Box mt={4}>
        <Box>
          <Typography
            color={greenClr}
            sx={{
              fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
              fontWeight: "bold",
            }}
          >
            {companyTitle}
            <Typography variant="span" sx={{ fontSize: "15px" }}>
              {" "}
              ({role})
            </Typography>
          </Typography>
          <Typography>{company}</Typography>
        </Box>
        <Stack
          sx={{
            marginTop: "20px",
            borderBottom: `1px solid ${greenClr} `,
            paddingBottom: "4rem",
          }}
          spacing={0.2}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            {" "}
            <Lens fontSize="5px" />
            {list1}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            <Lens fontSize="5px" /> {list2}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            <Lens fontSize="5px" />
            {list3}
          </Typography>
        </Stack>
      </Box>
    );
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Box sx={{ paddingTop: "5rem", paddingLeft: "1rem" }}>
          <Typography
            sx={{
              color: greenClr,
              paddingLeft: { xs: "0", sm: "0px", md: "5px", lg: "5px" },
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Work
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "3rem", sm: "5rem" }, padding: "0" }}
          >
            Experience
          </Typography>
          <Typography
            sx={{
              paddingLeft: { xs: "0", sm: "5px", md: "5px", lg: "5px" },
              fontSize: { sx: "20px", sm: "25px" },
              fontWeight: "300",
              width: { xs: "100%", md: "700px" },
            }}
          >
            All about my freelance, self-employed, and professional work
            experience.
          </Typography>
        </Box>

        <Box
          sx={{
            borderLeft: `1px solid ${greenClr} `,
            padding: {
              xs: "0 2rem 0rem 1rem",
              sm: "0 10rem 0rem 3rem",
              md: "0 20rem 0rem 5rem",
              lg: "0 20rem 0rem 7rem",
              xl: "0 20rem 0rem 7rem",
            },
            marginBottom: "5rem",
          }}
        >
          <Box
            sx={{
              borderBottom: `1px solid ${greenClr} `,
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "300",
              }}
              paddingBottom={6}
            >
              I started my professional career as a freelance photographer
              around 2018. In 2021, I resigned from my job to focus on
              completing college matters while taking on some freelance
              projects.
            </Typography>
          </Box>

          {/*------------------- Guvi media------------------------ */}

          {companyDetails.map((ele) => (
            <ComapnyData ele={ele} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Experience;
