import { Box, Grid, Typography } from "@mui/material";

export function SecSection({}) {
  return (
    <Grid container xs={10}>
      <Box sx={{}}>
        <Typography sx={{ fontSize: { xs: "3em", lg: "10em" } }} variant="h1">
          {" "}
          secsection
        </Typography>
      </Box>
    </Grid>
  );
}
