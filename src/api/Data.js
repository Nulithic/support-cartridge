const Issues = [
  {
    IssueTitle:
      "Alignment Error / Alignment Failed / Alignment Could Not Be Completed",
    Solution: [
      "Remove the cartridge from the printer, make sure the copper contacts on the cartridge are clean and not damaged.",
      "Clean the cartridge’s contacts using a dry lint free cloth (coffee filters will also work). Simply wipe the contacts clean.",
      "Clean the cartridge’s nozzles with a damp (preferably with distilled water, but bottled will also work) lint free cloth. Wipe the nozzles with the cloth until ink appears on the cloth, this should be done with a light touch. <b>Ink will stain</b> so use caution and do not use a cloth you don’t want stained.",
      "Reinstall the cartridge then run the alignment function on the printer, this should be a menu option on the printer. You can consult your printer’s manual for instructions on this.",
    ],
  },
  {
    IssueTitle:
      "Incompatible / Incorrect / Unsupported / Missing Cartridge or Cartridge Not Recognized",
    Solution: [
      "Check the compatibly of the cartridge you purchased and your printer, if they do not match you have an incorrect cartridge.",
      "If the cartridge is correct for your printer Clean the cartridge’s contacts using a dry lint free cloth (coffee filters will also work as well as a pencil eraser). Simply wipe the contacts clean.",
      "Reinstall the cartridge and follow any steps your printer displays on screen.",
      "If the cartridge is still not working the printer needs to be reset. Turn off your computer and printer. Unplug the printer for 2 minutes. Restart your computer and printer then try to print again.",
    ],
  },
  {
    IssueTitle: "Printer is Saying the Inkjet Cartridge is Empty",
    Solution: [
      "Do not be alarmed by this message, our cartridges are always fully filled. A low or empty ink cartridge message on your printer is a common occurrence in remanufactured inks. This does not affect printing and the message can be bypassed. The instructions for bypassing vary from printer to printer. Most printers will have a way to bypass the message on the LCD screen by pressing an ‘ok’ button. Please consult your printer’s manual if you are unable to bypass the error.",
    ],
  },
  {
    IssueTitle: "Older Generation Cartridge Message",
    Solution: [
      "Certain newer model printers will only accept “new generation” HP cartridges: Deskjet 1010, Deskjet 1056, Deskjet 1510, Deskjet 2540, Deskjet 2542, Deskjet 3511, Deskjet 4522, ENVY 4500, ENVY 4501, ENVY 4502, ENVY 4531, ENVY 5530, Officejet 2620, Officejet 4630, Officejet 4631, Officejet 4632, Officejet 4634, Officejet 4635, Officejet 4639",
      "If you get a message about an older generation cartridge <b>and</b> you are using one of the above printers the cartridge you have will not work. The only way it will work is if your firmware has not been updated on the printer. The fastest way to tell what generation a cartridge is, is by the date code: <br><b>Old Generation = Expiration date of 3/31/2014 and earlier</b><br><b>New Generation = Expiration date of 4/1/2014 and later</b>",
    ],
  },
];

export const Inks = [
  {
    Model: "HP 61/61XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2], Issues[3]],
  },
  {
    Model: "HP 62/62XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2], Issues[3]],
  },
  {
    Model: "HP 63/63XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "HP 64/64XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "HP 65/65XL - Remanufactured",
    Video: "https://www.youtube.com/embed/tLgovMsroXg",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "HP 564XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "HP 902XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "HP 950XL/951XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "Canon 240XL/241XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
  {
    Model: "Canon 245XL/246XL - Remanufactured",
    Video: "",
    Issues: [Issues[0], Issues[1], Issues[2]],
  },
];
