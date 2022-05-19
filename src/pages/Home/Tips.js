import { Paper, Typography, Container, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const tips = [
  "Always follow your printer's recommended maintenance guide.",
  "Never let the printer sit idle for long stretches of time, make sure it gets used at least once a week.",
  "Keep the printer clean from dust (dust with a damp lint-free cloth) and keep it covered when not in use.",
  "Never use compressed air to clean a printer as the force will send dust or debris inside the printer causing issues.",
  "Power the printer down only using the printer's power button, never directly unplug it from the wall or power strip.",
];

export default function Tips() {
  return (
    <Container id="tips">
      <Typography variant="h4">Tips</Typography>
      <List component={Paper} elevation={3} sx={{ background: "#f6f6fe", padding: 2, marginTop: 5 }}>
        {tips.map((tip, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CircleIcon sx={{ fontSize: 15 }} />
            </ListItemIcon>
            <ListItemText>{tip}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
