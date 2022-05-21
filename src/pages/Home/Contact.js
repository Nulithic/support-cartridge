import { Typography, Paper, Stack, Link, Grid } from "@mui/material";
import Section from "../../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Link underline="hover" color="inherit" href="https://supportcartridge.on.spiceworks.com/portal">
              <Typography variant="h5">Create a Ticket</Typography>
              <Typography variant="body1">Click here to create a ticket. Our tech support team will reply to you as soon as possible.</Typography>
            </Link>
          </Paper>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Contact Us</Typography>
            <Typography variant="body1">Email: info@supportcartridge.com</Typography>
          </Paper>
        </Stack>
      </Grid>
    </Section>
  );
}
