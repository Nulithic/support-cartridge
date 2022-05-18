import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "If I use a remanufactured inkjet will I void my printer's warranty?",
    answer:
      "No, using a remanufactured inkjets will not void your warranty. It is illegal for the printer manufacturer to do so beacuse of the Magnuson Moss Warranty Improvement Act.",
  },
  {
    question: "My printer says the inkjet is empty when I just installed a new one, why?",
    answer:
      "Don't worry, your cartirdge is not empty. Since a remanufactured cartridge has been used before this a normal issue. For most printers you can just select a button to continue printing. For more detailed instructions please consult your printer's manual.",
  },
  {
    question: "The inkjet is not fitting in my printer, what can I do?",
    answer:
      "First, confirm that the correct cartridge for your printer was purchased. Then make sure all the clips covering the cartridge are removed. If you need help installing a cartridge please consult your printer's manual.",
  },
];

//f5f5fe

export default function FAQ() {
  return (
    <Container sx={{ background: "transparent" }}>
      <Typography variant="h4" sx={{ marginBottom: 5 }}>
        Frequently Asked Questions
      </Typography>

      {faqs.map((item, index) => (
        <Accordion key={index} elevation={3}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ background: "#dedefc" }}>
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
