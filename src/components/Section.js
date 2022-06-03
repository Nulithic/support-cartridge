import { Typography, Grid, Container, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Section(props) {
  const { id, title, children } = props;
  const matches = useMediaQuery("(min-width:900px)");
  const theme = useTheme();

  return (
    <Container id={id}>
      <Paper elevation={3} sx={{ margin: matches ? "2rem 0rem" : "1rem 0rem", padding: 4, background: theme.palette.secondary.main }}>
        <Grid container alignItems="center" justifyContent="center" spacing={5} sx={{ paddingTop: 2, paddingBottom: 5 }}>
          {title ? (
            <Grid item>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {title}
              </Typography>
            </Grid>
          ) : null}
          <Grid item container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
