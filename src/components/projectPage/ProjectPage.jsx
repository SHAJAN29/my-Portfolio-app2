import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import "./ProjectPage.css";
import { NavColor, UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [mode] = useContext(UserContext);
  const greenClr = useContext(NavColor);

  const ProjectDetails = [
    {
      projectTitle: "Ticket Booking App",
      imageUrl:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/12/south-films-1671867198.jpg",
      projectContent:
        " Its a Full Stack (MERN) Movie Ticket Booking App, with instant email notification.",
      techs: "React,Meterail UI,Experes,Node js ,MongoDB",
    },
  ];

  const ProjectCard = ({ ele }) => {
    const navigate = useNavigate();
    const LocationLink = () => {
      navigate("/OnProcess");
    };

    const { projectTitle, imageUrl, projectContent, techs } = ele;
    return (
      <Card sx={{ maxWidth: 320, height: 420 }}>
        <CardMedia
          sx={{ cursor: "pointer" }}
          onClick={LocationLink}
          component="img"
          alt="Ticket Booking App"
          height="220"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectTitle}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {projectContent}
          </Typography>
          <Typography
            color={mode === "light" ? greenClr : "#fff"}
            mt={2}
            sx={{ fontSize: "11px", fontWeight: "300" }}
          >
            Tech used:{" "}
            <Typography variant="span" sx={{ fontSize: "11px" }}>
              {" "}
              {techs}
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={LocationLink} variant="text" size="small">
            check out
          </Button>
          <Button variant="text" size="small">
            Source Code
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <div className="ProjectPage">
      <Box>
        <Box sx={{ paddingTop: "7rem" }}>
          <Typography
            sx={{ fontSize: { xs: "3rem", sm: "5rem", md: "6rem" } }}
            fontWeight={"bold"}
          >
            Projects
          </Typography>
          <Typography pt={3} variant="h5" fontWeight={300}>
            Showcase of my front-end and full-stack related works.
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          {ProjectDetails.map((ele) => (
            <ProjectCard ele={ele} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default ProjectPage;
