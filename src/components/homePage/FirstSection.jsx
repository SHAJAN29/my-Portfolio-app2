import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Article } from "@mui/icons-material";
import { NavColor, UserContext } from "../../App.jsx";
import { useContext } from "react";
import "./FirstSection.css";
import { Navigate, useNavigate } from "react-router-dom";

export function FirstSection({ theme }) {
  const mode = useContext(UserContext);
  const navigate = useNavigate();
  const cardData = [
    {
      cardTitle: "Clean & Intuitive",
      cardContent:
        "Keep the UI clean with a modern touch without compromising UX.",
      cardinsideClr: "#fcd34d",
      Cardlogo:
        "M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z",
    },
    {
      cardTitle: "Detail Oriented",
      cardContent:
        "Awareness to ease of access, UI consistency, and improved UX.",
      cardinsideClr: "#f9a8d4",
      Cardlogo:
        "M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z",
    },
    {
      cardTitle: "Pretty & Optimized",
      cardContent:
        "Writing clean code is a top priority while keeping it as optimized as possible.",
      cardinsideClr: "#7dd3fc",
      Cardlogo:
        "M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z",
    },
  ];

  return (
    <Grid container sx={{ mt: "1em" }} spacing={8}>
      <Grid xs={8} md={5} lg={6} xl={7}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            translate: {
              xs: "5em 8em",
              sm: "5rem 8rem",
              md: "3em 10em",
              xl: "3em 13em",
              lg: "3em 10em",
            },
            gap: "1em",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xl: "3em",
                md: "3em",
                xs: "2em",
                fontWeight: "400",
              },
            }}
          >
            hi✌️
          </Typography>

          <Typography
            color={"succes"}
            sx={{
              fontSize: {
                lg: "6em",
                md: "5em",
                xs: "4em",
                fontWeight: "500",
              },
            }}
            variant={"h1"}
          >
            I'm{" "}
            <Typography color={"primary"} variant="span">
              M_
            </Typography>
            SHAJAN
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              display: "block",
              fontWeight: "400",
            }}
          >
            A{" "}
            <Typography display={"inline-block"} fontWeight={"bold"}>
              front-end developer
            </Typography>{" "}
            who loves intuitive, clean and <br /> modern UI design.
          </Typography>
          <Box mt={{ md: 1 }}>
            <Button
              onClick={() => navigate("/Contact")}
              sx={{ color: "#fff" }}
              variant="contained"
            >
              Get in touch
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.figma.com/community/file/1229754618647539681/Resume-(M_SHAJAN)-(Community)"
                )
              }
              sx={{
                marginLeft: "10px",

                ":hover": {
                  backgroundColor: "transparent",
                },
              }}
              startIcon={<Article />}
              variant="text"
            >
              resume
            </Button>
          </Box>

          <Box sx={{ mt: { xs: 5, md: 5, lg: 8 } }}>
            <Typography
              sx={{ fontWeight: "300", fontSize: "18px" }}
              variant="h6"
            >
              career tech stack :
            </Typography>

            <Stack mt={1} direction="row" spacing={1}>
              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  filter: "grayscale(100%)",
                  ":hover": { filter: "grayscale(0%)", transition: "0.5s" },
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="react"
              />
              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  ":hover": { filter: "grayscale(0%)" },
                  filter: "grayscale(100%)",
                }}
                image="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
                alt="tanstack Quiery"
              />

              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  ":hover": { filter: "grayscale(0%)" },
                  filter: "grayscale(100%)",
                }}
                image="https://mui.com/static/logo.png"
                alt="meterial UI"
              />

              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  ":hover": { filter: "grayscale(0%)" },
                  filter: "grayscale(100%)",
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="nodejs"
              />

              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  ":hover": { filter: "grayscale(0%)" },
                  filter: "grayscale(100%)",
                }}
                image="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                alt="nodejs"
              />

              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  ":hover": { filter: "grayscale(0%)" },
                  filter: "grayscale(100%)",
                }}
                image="https://www.svgrepo.com/show/331488/mongodb.svg"
                alt="mongoDB"
              />

              <CardMedia
                component="img"
                height="25"
                color="primary"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                }}
                image="https://static.thenounproject.com/png/1729054-200.png"
                alt="vertical line"
              />

              <CardMedia
                component="img"
                height="25"
                sx={{
                  width: "30px",
                  objectFit: "contain",
                  paddingX: "0",
                  marginX: "0",
                  ":hover": { filter: "grayscale(0%)" },
                  filter: "grayscale(100%)",
                }}
                image="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
                alt="vsCode"
              />
            </Stack>
          </Box>
        </Box>
      </Grid>
      <Grid sx={{ display: { xs: "none", md: "flex" } }} md={5} xl={3}>
        <Box sx={{ left: { md: "50%", xl: "60%" } }} className="profilePicture">
          <CardMedia
            component="img"
            height="100%"
            sx={{ width: { md: "620px", lg: "700px", xl: "700px" } }}
            image="https://cdn3d.iconscout.com/3d/premium/thumb/man-6530466-5823045.png"
            alt="profileIMG"
          />
          <Typography
            sx={{
              color: theme.palette.mode === "light" ? "#94a3b8" : "#fff",
              fontSize: { md: "6em", lg: "8em" },
              position: "absolute",
              top: "69%",
              fontWeight: "bold",
              left: { md: "46%", lg: "52%", xl: "60%" },
              letterSpacing: "10px",
            }}
            variant="h1"
          >
            welcome
          </Typography>
          <Typography
            variant="span"
            sx={{
              fontSize: { lg: "5em", md: "3.5em" },
              position: "absolute",
              top: { lg: "72%", md: "71.7%" },
              fontWeight: "bold",
              left: { lg: "77%", md: "69%", xl: "85%" },
              letterSpacing: "10px",
            }}
          >
            {" 😊"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        mt={10}
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        md={9}
        lg={9}
        xl={10}
      >
        <Stack
          sx={{ translate: { md: "4em 5em", lg: "4em 3em" } }}
          direction="row"
          spacing={2}
        >
          {cardData.map((ele, index) => (
            <TopContentCard key={index} ele={ele} mode={mode} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

function TopContentCard({ mode, ele }) {
  const greenClr = useContext(NavColor);
  const { cardTitle, cardContent, Cardlogo } = ele;
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "15px",
        padding: "15px 20px",
        width: { lg: "400px", md: "315px" },
        height: { lg: "120px", md: "140px" },
        border: `1px solid ${mode[0] === "light" ? greenClr : "#fff"}`,
      }}
    >
      <Box
        sx={{
          backgroundColor: greenClr,
          top: "9px",
          left: "20px",
        }}
        width={"50px"}
        height={"50px"}
        borderRadius={50}
        className="CardSvg"
        position={"absolute"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff">
          <path d={Cardlogo}></path>
        </svg>
      </Box>
      <Typography
        sx={{
          padding: "5px 40px",
          borderRadius: "20px",
          backgroundColor: mode[0] === "dark" ? "#fff" : "succes",
          color: mode[0] === "dark" ? "#000" : "#fff",
          fontSize: "17px",
          fontWeight: "400",
        }}
        textAlign={"center"}
        variant="h6"
      >
        {cardTitle}
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          fontWeight: "400",
          fontSize: "14px",
          padding: "10px 0 10px 50px",
        }}
        variant="h6"
      >
        {cardContent}
      </Typography>
    </Box>
  );
}
