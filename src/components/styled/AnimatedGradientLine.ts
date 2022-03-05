import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import theme from "theme";

interface AnimatedGradientLineProps {
  height?: string;
  animationSpeed?: string;
}

const AnimatedGradient = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;

const StyledAnimatedGradientLine = styled("hr")(
  ({ height = "2px", animationSpeed = "40s" }: AnimatedGradientLineProps) => ({
    animation: `${AnimatedGradient} ${animationSpeed} ease infinite;`,
    background: `linear-gradient(270deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main});`,
    backgroundSize: "400% 400%;",
    border: "none",
    height: `${height}`,
  })
);

export default StyledAnimatedGradientLine;
