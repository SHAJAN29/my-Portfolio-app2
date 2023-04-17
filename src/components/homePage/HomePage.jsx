import { Box, Stack, Typography, createTheme } from "@mui/material";

import "./HomePage.css";
import { useContext } from "react";
import UserContext from "../../App.jsx";
import { FirstSection } from "./FirstSection";
import { SecSection } from "./SecSection";
import { ThirdSection } from "./ThirdSection";

const HomePage = ({ theme }) => {
  const mode = useContext(UserContext);
  // const theme = createTheme({
  //   palette: {
  //     mode: mode ? "dark" : "light",
  //     primary: {
  //       main: "#70a2ae", //text M color
  //     },
  //     bgclrDrk: {
  //       main: "#cbd5e1",
  //     },
  //     highLIghtClr: {
  //       main: "#4d587b",
  //     },
  //     TxtClr: {
  //       main: "#94a3b8", // text shajan color
  //       light: "#61b1c9",
  //     },
  //   },
  // });

  // const { TxtClr, primary, highLIghtClr } = theme.palette;

  // eslint-disable-next-line no-undef

  console.log(theme.palette.mode);
  return (
    <div className="Hompage">
      <Stack spacing={{ xs: 30, lg: 20, md: 20 }} className="sectionFirst">
        <Box sx={{ translate: "0 -4em" }}>
          <FirstSection theme={theme} />
        </Box>
        <Box>
          <SecSection theme={theme} />
        </Box>
        <Box>
          <ThirdSection theme={theme} />
        </Box>
      </Stack>
      <section className="sectionSec"></section>
    </div>
  );
};

export default HomePage;
