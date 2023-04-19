import { createContext, useMemo, useState } from "react";
import "./App.css";
import { Home } from "./components";

import { Container, Paper, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import ProjectPage from "./components/projectPage/ProjectPage";
import ContactPage from "./components/Contact page/ContactPage";
import { FooterApp } from "./FooterApp";

export const UserContext = createContext();
export const NavColor = createContext();

function App() {
  // function paretColor() {
  //   setMode(!mode);
  // }

  // function changetheme() {
  //   if (mode) {
  //     return "dark";
  //   } else {
  //     return "light";
  //   }
  // }
  const greenClr = "#70a2ae";

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#3d5869", //text M color
            },

            divider: {
              main: "#2f2e4d",
            },
            navbarClr: "#252b45", //baground color navbar
            succes: "#94a3b8",
            text: {
              primary: "#94a3b8", // text shajan color
              secondary: "#61b1c9",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#70a2ae", //text M color
            },
            divider: "#61b1c9",
            background: {
              default: "#61b1c9",
              paper: "#252b45",
            },

            text: {
              primary: "#fff",
              secondary: "#61b1c9",
            },
          }),
    },
  });

  const [mode, setMode] = useState("light");

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // const theme = createTheme({
  //   palette: {
  //     mode: mode ? "dark" : "light",
  //     primary: {
  //       main: "#0f172a",
  //     },
  //     bgclrDrk: {
  //       main: "#cbd5e1",
  //     },
  //     info: {
  //       main: "#1e293b",
  //     },
  //     success: {
  //       main: "#94a3b8",
  //     },
  //   },
  // });

  return (
    <NavColor.Provider value={greenClr}>
      <UserContext.Provider value={[mode, setMode]}>
        <ThemeProvider theme={theme}>
          <Paper elevation={0}>
            <div className="App">
              <NavBar theme={theme} />

              <Container maxWidth="lg">
                <Routes>
                  <Route path="/" element={<Home theme={theme} />} />
                  <Route
                    path="/Projects"
                    element={<ProjectPage theme={theme} />}
                  />
                  <Route
                    path="/Contact"
                    element={<ContactPage theme={theme} />}
                  />
                  <Route path="/Experience" element={<Home theme={theme} />} />
                </Routes>
              </Container>
              <FooterApp theme={theme} greenClr={greenClr} />
            </div>
          </Paper>
        </ThemeProvider>
      </UserContext.Provider>
    </NavColor.Provider>
  );
}

export default App;
