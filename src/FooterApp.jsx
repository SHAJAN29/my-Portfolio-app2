import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FooterApp.css";
import { useContext } from "react";
import { UserContext } from "./App";
import { GitHub, OpenInNew } from "@mui/icons-material";
export function FooterApp({ greenClr, theme }) {
  const footerNavData = ["Projects", "Experience", "Contact"];

  const [mode] = useContext(UserContext);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerUrlGithub = () => {
    window.open("https://github.com/SHAJAN29");
  };
  const footerUrlTwiter = () => {
    window.open("https://twitter.com/MShajan141294");
  };

  const footerUrlLinkdn = () => {
    window.open("https://www.linkedin.com/in/shajan-m-2705a6162/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "20px" },
        justifyContent: "space-evenly",
        padding: "20px",

        backgroundColor: mode === "light" ? "fff" : " #181d2f",
      }}
      component={"footer"}
    >
      <Box>
        <Typography sx={{ color: greenClr }}>About Me</Typography>
        <Typography sx={{ fontSize: "13px", width: "300px" }}>
          I'm M_Shajan, a front-end developer who loves intuitive, clean and
          modern UI design.
        </Typography>
        <Box
          sx={{ display: "flex", gap: "10px", alignItems: "center" }}
          className="footerIcons"
        >
          <GitHub
            onClick={footerUrlGithub}
            cursor="pointer"
            fontSize="large"
            color={mode === "light" ? "#000" : "#fff"}
          />
          <img
            onClick={footerUrlLinkdn}
            className="img2"
            src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
            alt="linkden"
          />
          <img
            onClick={footerUrlTwiter}
            className="img3"
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
            alt="twiter"
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ color: greenClr }}>work</Typography>
        {footerNavData.map((ele) => (
          <Typography
            onClick={() => navigate(`${ele}`)}
            sx={{
              display: "flex",

              alignItems: "center",
              fontSize: "15px",
              cursor: "pointer",
              ":hover": { textDecoration: "underline" },
            }}
          >
            {ele}
            <OpenInNew className="navLinkLogo" fontSize="5px" />
          </Typography>
        ))}
      </Box>
      <Box>
        <Box
          onClick={scrollToTop}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          className="emojiBox"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={{ xs: "30px", md: "40px", lg: "50px" }}
              sx={{ fontWeight: "bold" }}
            >
              Thank You{" "}
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>for visiting</Typography>
          </Box>
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/victory-hand_270c-fe0f.png"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}
