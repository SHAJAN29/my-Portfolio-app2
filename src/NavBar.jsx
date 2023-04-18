import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { NavColor, UserContext } from "./App";
import {
  GitHub,
  KeyboardArrowRight,
  LightMode,
  ModeNight,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function NavBar({ theme }) {
  const [mode, setMode] = useContext(UserContext);

  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [val, setVal] = useState("works");

  const refone = useRef();

  const pages = ["Projects", "Experience", "Contact"];

  const greenClr = useContext(NavColor);
  const scrooled = () => {
    if (window.scrollY >= 80) {
      return setScrolled(true);
    } else {
      return setScrolled(false);
    }
  };
  window.addEventListener("scroll", scrooled);

  function bgColor() {
    if (scrolled && mode === "light") {
      return theme.palette.navbarClr;
    } else if (scrolled && mode === "dark") {
      return greenClr;
    }
  }
  const navigate = useNavigate();

  const NavbarItem = () => {
    return (
      <Box>
        <Box display={{ md: "flex", xs: "none", sm: "none" }} gap={"20px"}>
          {pages.map((ele, index) => (
            <Typography
              sx={{ cursor: "pointer" }}
              key={index}
              onClick={() => navigate(`${ele}`)}
            >
              {ele}
            </Typography>
          ))}
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    const closeTheNav = (e) => {
      if (!refone.current.contains(e.target)) {
        setShowNav(false);
      } else {
        setShowNav(!showNav);
      }
    };

    document.addEventListener("click", closeTheNav, true);
  }, []);

  const ToggleFunction = () => {
    return (
      <Button
        className="NavToggleButton"
        sx={{
          display: {
            lg: "none",
            xl: "none",
            md: "none",
            xs: "flex",
            sm: "flex",
          },
          marginLeft: "25px",
        }}
        variant="outlined"
        endIcon={<KeyboardArrowRight />}
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        {showNav ? val : "works"}
      </Button>
    );
  };

  return (
    <Stack
      sx={{
        backgroundColor: bgColor,
        transition: "0.5s",
        zIndex: "99",
        position: "sticky",
        top: "0",
        left: "0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box display={"flex"}>
          {" "}
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            variant="h5"
          >
            {" "}
            <Typography
              variant="span"
              color={scrolled && mode === "dark" ? "#fff" : "primary"}
            >
              {" "}
              Dev.
            </Typography>
            Shajan
          </Typography>
          <ToggleFunction />
          {showNav ? (
            <Box
              ref={refone}
              className="NavBox"
              backgroundColor={
                mode === "light" ? theme.palette.navbarClr : greenClr
              }
              sx={{
                transition: "0.5s",
                borderRadius: "20px",
                padding: "20px",
                position: "absolute",
                top: { xs: "3.5rem" },
                left: { xs: "7.5rem" },
                flexDirection: "column",
                gap: "50px",
              }}
            >
              {pages.map((ele, index) => (
                <Typography
                  sx={{
                    padding: "5px 20px",
                    borderRadius: "20px",
                    ":hover": { backgroundColor: greenClr },
                    cursor: "pointer",
                    marginBottom: "20px",
                  }}
                  key={index}
                  color={"#fff"}
                  onClick={() => {
                    setVal(ele);
                    navigate(`/${ele}`);
                    setShowNav(!showNav);
                  }}
                >
                  {ele}
                </Typography>
              ))}
            </Box>
          ) : null}
        </Box>
        <Box>
          <NavbarItem />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              color: scrolled && mode === "light" ? "#fff" : "primary",
              paddingX: "10px",

              ":hover": {
                backgroundColor: "transparent",
              },
            }}
            size="large"
            onClick={() => window.open("https://github.com/SHAJAN29")}
            variant="text"
          >
            <GitHub />
          </IconButton>

          <IconButton
            sx={{
              color: scrolled && mode === "light" ? "#fff" : "primary",
              paddingX: "10px",

              ":hover": {
                backgroundColor: "transparent",
              },
            }}
            size="large"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            variant="text"
          >
            {mode === "light" ? <ModeNight /> : <LightMode />}
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
}
