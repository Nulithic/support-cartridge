import { Typography, Grid, Container, Paper } from "@mui/material";

export default function Section(props) {
  const { id, title, children } = props;

  return (
    <Container id={id}>
      <Grid container alignItems="center" justifyContent="center" spacing={5}>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
