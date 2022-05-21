import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
export default function Brand() {
  const { brand } = useParams();

  return (
    <Box>
      <Typography>{brand}</Typography>
    </Box>
  );
}
