import { FC, useState, ReactNode } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FlipContainer = styled(Box)({
  perspective: "1000px",
  width: 300,
  height: 350,
  position: "relative",
});

const FlipCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "flipped",
})(({ flipped }: { flipped: boolean }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  transformStyle: "preserve-3d",
  transition: "transform 0.8s",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
}));

const CardSide = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backfaceVisibility: "hidden",
  border: "2px solid #323232",
  boxShadow: "4px 4px #323232",
  backgroundColor: "lightgrey",
  gap: 20,
  borderRadius: 5,
});

const Front = styled(CardSide)({});
const Back = styled(CardSide)({
  transform: "rotateY(180deg)",
});

interface IFlipBoxProps {
  title1: string;
  title2: string;
  children: [ReactNode, ReactNode];
}

const FlipBox: FC<IFlipBoxProps> = ({
  title1,
  title2,
  children,
}) => {
  // Development-time check for children length
  if (process.env.NODE_ENV !== "production") {
    if (!Array.isArray(children) || children.length !== 2) {
      throw new Error(
        "FlipBox expects exactly 2 children (e.g. <FlipBox>front, back</FlipBox>)"
      );
    }
  }
  const [flipped, setFlipped] = useState(false);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
      <Box
        onClick={() => setFlipped(!flipped)}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 20,
          cursor: "pointer",
          mb: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-70px",
            textDecoration: flipped ? "none" : "underline",
            color: "#323232",
            fontWeight: 600,
          }}
        >
          {title1}
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "-70px",
            textDecoration: flipped ? "underline" : "none",
            color: "#323232",
            fontWeight: 600,
          }}
        >
          {title2}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            border: "2px solid #323232",
            boxShadow: "4px 4px #323232",
            backgroundColor: "#fff",
            position: "relative",
            transition: "0.3s",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "20px",
              width: "20px",
              border: "2px solid #323232",
              borderRadius: "5px",
              left: flipped ? "30px" : "-2px",
              bottom: "2px",
              backgroundColor: "#fff",
              boxShadow: "0 3px 0 #323232",
              transition: "0.3s",
            }}
          />
        </Box>
      </Box>

      <FlipContainer>
        <FlipCard flipped={flipped}>
          <Front>{children[0]}</Front>
          <Back>{children[1]}</Back>
        </FlipCard>
      </FlipContainer>
    </Box>
  );
};

export default FlipBox;
