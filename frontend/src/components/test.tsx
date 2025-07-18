import { useState } from "react";
import { Box, Typography } from "@mui/material";
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

const Input = styled("input")({
  width: 250,
  height: 40,
  borderRadius: 5,
  border: "2px solid #323232",
  backgroundColor: "#fff",
  boxShadow: "4px 4px #323232",
  fontSize: 15,
  fontWeight: 600,
  color: "#323232",
  padding: "5px 10px",
  outline: "none",
  "::placeholder": {
    color: "#666",
    opacity: 0.8,
  },
  "&:focus": {
    border: "2px solid #2d8cf0",
  },
});

const SubmitButton = styled("button")({
  margin: "20px 0",
  width: 120,
  height: 40,
  borderRadius: 5,
  border: "2px solid #323232",
  backgroundColor: "#fff",
  boxShadow: "4px 4px #323232",
  fontSize: 17,
  fontWeight: 600,
  color: "#323232",
  cursor: "pointer",
  "&:active": {
    boxShadow: "0 0 #323232",
    transform: "translate(3px, 3px)",
  },
});

export default function FlipCardAuth() {
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
          Log in
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
          Sign up
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
          <Front>
            <Typography
              sx={{ fontSize: 25, fontWeight: 900, color: "#323232", mb: 2 }}
            >
              Log in
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <SubmitButton type="submit">Let`s go!</SubmitButton>
            </form>
          </Front>
          <Back>
            <Typography
              sx={{ fontSize: 25, fontWeight: 900, color: "#323232", mb: 2 }}
            >
              Sign up
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <SubmitButton type="submit">Confirm!</SubmitButton>
            </form>
          </Back>
        </FlipCard>
      </FlipContainer>
    </Box>
  );
}
