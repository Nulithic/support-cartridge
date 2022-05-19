import { Typography, Paper, Stack, Container } from "@mui/material";

export default function Contact() {
  return (
    <Container id="contact">
      <Typography variant="h4" sx={{ marginBottom: 5 }}>
        Contact
      </Typography>
      <Stack spacing={2}>
        <Paper elevation={3} sx={{ background: "#f6f6fe", padding: 2 }}>
          <Typography variant="h5">Contact Us</Typography>
          <Typography variant="body1">Email: info@supportcartridge.com</Typography>
          <Typography variant="body1">Phone: 1-855-999-4657</Typography>
        </Paper>
        <Paper elevation={3} sx={{ background: "#f6f6fe", padding: 2 }}>
          <Typography variant="h5">Create a Ticket</Typography>
          <Typography variant="body1">Click here to create a ticket. Our tech support team will reply to you as soon as possible.</Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
