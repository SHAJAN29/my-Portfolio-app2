import { Box, Grid, Typography } from "@mui/material";

export function ThirdSection({}) {
  return (
    <Grid container xs={10}>
      <Box>
        <Typography sx={{ fontSize: { xs: "3em", lg: "10em" } }} variant="h1">
          {" "}
          ThirdSection
        </Typography>
      </Box>
    </Grid>
  );
}
