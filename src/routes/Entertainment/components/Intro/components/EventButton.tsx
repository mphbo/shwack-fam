import { Button, keyframes } from "@mui/material";

type Tab = "upcoming" | "past";

const pulseAnimation = keyframes`
  0% { background-color: #51daff66; }
  10% { background-color: #51daff55; } /* Slightly lighter */
  20% { background-color: #51daff44; } /* Slightly lighter */
  30% { background-color: #51daff33; } /* Slightly lighter */
  40% { background-color: #51daff22; } /* Slightly lighter */
  50% { background-color: #51daff11; } /* Slightly lighter */
  60% { background-color: #51daff22; } /* Slightly lighter */
  70% { background-color: #51daff33; } /* Slightly lighter */
  80% { background-color: #51daff44; } /* Slightly lighter */
  90% { background-color: #51daff55; } /* Slightly lighter */
  100% { background-color: #51daff66; }
`;

const EventButton = ({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        border: "none",
        borderRight: "#51daff 6px solid",
        borderRadius: 0,
        padding: "20px",
        fontSize: "30px",
        animation: `${pulseAnimation} 1.11s infinite cubic-bezier(0.4, 0, 0.6, 1)`,
      }}
      fullWidth
      onClick={onClick}
    >
      May the 24th be with you
    </Button>
  );
};

export default EventButton;
