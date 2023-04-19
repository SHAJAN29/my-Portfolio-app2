import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { NavColor, UserContext } from "../../App";
import { CalendarMonth } from "@mui/icons-material";
import "./ThirdSection.css";

export const ReapeateableData = ({ title, midContent, content }) => {
  const greenClr = useContext(NavColor);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography color={greenClr} sx={{ fontSize: "18px", fontWeight: "500" }}>
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "1em",
            sm: "2rem",
            md: "2rem",
            lg: "2rem",
            xl: "3rem",
          },
        }}
        variant="h1"
      >
        {" "}
        {midContent}
      </Typography>
      <Typography
        sx={{
          width: { sm: "300px", md: "500px" },
          fontWeight: "200",
          fontSize: "15px",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export function ThirdSection({ theme }) {
  const greenClr = useContext(NavColor);
  const [mode] = useContext(UserContext);

  const cleanData = {
    title: "Clean & Intuitive",
    midContent: "Eye Catching, Modern & Minimalist Design.",
    content:
      "Keep the User Interface clean with a modern touch without compromising the User Experience.",
  };
  const { title, midContent, content } = cleanData;

  const [cardDataIterate, setCardDataIterate] = useState([
    {
      cardNum: "1",
      cardTitle: "Typography",
      cardContent: " Selecting the font type, font size, and font weight.",
    },

    {
      cardNum: "2",
      cardTitle: "Spacing",
      cardContent: " Positioning and adding spacing between elements.",
    },
    {
      cardNum: "3",
      cardTitle: "Colors",
      cardContent: " Choosing a color scheme with sufficient contrast.",
    },
    {
      cardNum: "4",
      cardTitle: "Effects",
      cardContent: "  Add effects like borders, shadows, rounded corners, etc.",
    },
  ]);

  const [val, setVal] = useState(3);

  console.log(val);

  return (
    <Stack spacing={10} xs={10}>
      <Box>
        <ReapeateableData
          title={title}
          midContent={midContent}
          content={content}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: "450px",
          borderRadius: "10px",
          backgroundColor: mode === "light" ? greenClr : "#181d2f",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {cardDataIterate.map((element, index) => (
            <ThirdPageCard
              key={index}
              index={index}
              element={element}
              mode={mode}
              theme={theme}
              greenClr={greenClr}
              setVal={setVal}
              val={val}
              cardDataIterate={cardDataIterate}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            className={`WhiteBox${val} `}
            backgroundColor={mode === "light" ? "#fff" : greenClr}
            sx={{
              translate: "0 1rem",
            }}
          >
            {" "}
            <Box>
              {" "}
              <Box className="topEK" sx={{ display: "flex" }}>
                <Typography variant="h5">E</Typography>
                <Typography variant="h6">High</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4">Create Documentations</Typography>
              <Typography variant="h6">
                It is a good to create early documentation for our new library.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h4">Docs</Typography>
              <Typography variant="h6">Support</Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                <CalendarMonth fontSize="12px" />
                10:00 Am -Tommorow
              </Typography>
            </Box>
          </Box>

          <Box
            className={`WhiteBox${val} `}
            backgroundColor={mode === "light" ? "#fff" : greenClr}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "none",
                xl: "none",
              },
              flexDirection: "column",
              translate: "2rem 1rem",
            }}
          >
            {" "}
            <Box>
              {" "}
              <Box className="topEK" sx={{}}>
                <Typography variant="h5">E</Typography>
                <Typography variant="h6">High</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4">Create Documentations</Typography>
              <Typography variant="h6">
                It is a good to create early documentation for our new library.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h4">Docs</Typography>
              <Typography variant="h6">Support</Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                <CalendarMonth fontSize="12px" />
                10:00 Am -Tommorow
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

function ThirdPageCard({
  mode,
  theme,
  greenClr,
  element,
  index,
  cardDataIterate,
  setVal,
  val,
}) {
  const { cardNum, cardTitle, cardContent } = element;

  return (
    <Box
      onClick={() => setVal(index)}
      sx={{
        cursor: "pointer",
        translate: "0rem -1em",
        display: "flex",
        gap: "20px",

        width: "400px",
        height: "90px",
        border: `1px solid ${mode === "light" ? greenClr : "#fff"}`,
        borderRadius: "10px",
        backgroundColor: mode === "light" ? "#fff" : greenClr,
        ":hover": {
          backgroundColor: mode === "light" ? "#0f446c" : "rgb(71, 176, 176)",
        },
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            translate: "0 -10px",
            margin: "0",
            padding: "0 20px",
            width: "50px",
          }}
          fontWeight={"bold"}
        >
          {cardNum}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          textAlign: "left",
        }}
      >
        <Typography
          variant="h5"
          color={mode === "light" ? greenClr : theme.palette.background.paper}
          sx={{ padding: "10px 20px 0 20px", fontWeight: "bold" }}
        >
          {cardTitle}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "300",
            fontSize: "15px",
            padding: "2px 20px 0 20px",
          }}
        >
          {cardContent}
        </Typography>
      </Box>
    </Box>
  );
}
