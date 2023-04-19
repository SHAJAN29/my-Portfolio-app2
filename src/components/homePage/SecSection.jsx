import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { NavColor, UserContext } from "../../App";
import "./SecSection.css";
import { Padding } from "@mui/icons-material";

export function SecSection({}) {
  const greenClr = useContext(NavColor);
  const [mode, setMode] = useContext(UserContext);

  return (
    <Box
      className={"secSectionBox"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: { xs: "0 0", sm: "1rem 0", md: "2rem 0", lg: "5rem 0" },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        role="img"
        fill="currentColor"
      >
        <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
      </svg>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 0.5, sm: 0.5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "2em", sm: "3rem", lg: "5em" },
            fontWeight: "100",
            fontStyle: "italic",
          }}
        >
          {" "}
          Beautiful
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: { xs: "50px", sm: "80px", md: "120", lg: "140px" },
              height: "5px",
              backgroundColor: mode === "light" ? "#94a3b8" : "#fff",
            }}
          ></Box>
          <Typography
            sx={{
              color: greenClr,
              fontSize: { xs: "1.5em", sm: "3rem", lg: "4em" },
              fontWeight: "900",
            }}
            variant="h4"
          >
            inside{" "}
            <Typography
              color={mode === "light" ? "#94a3b8" : "#fff"}
              variant="span"
              sx={{ fontWeight: "100" }}
            >
              And
            </Typography>{" "}
            out
          </Typography>
          <Box
            sx={{
              width: { xs: "30px", sm: "50px", md: "80px" },
              height: "5px",
              backgroundColor: mode === "light" ? "#94a3b8" : "#fff",
            }}
          ></Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "2em", sm: "3rem", lg: "4em" },
            }}
            variant="h4"
          >
            is a{" "}
            <Typography
              variant="span"
              color={mode === "light" ? "#fff" : greenClr}
              sx={{
                fontWeight: { xs: "500", sm: "900" },
                padding: "0px 10px 5px 10px",
                borderRadius: "20px",
                backgroundColor: mode === "light" ? greenClr : "#fff",
              }}
            >
              {" "}
              must.
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
