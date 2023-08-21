import { Box, Button, Text } from "@kuma-ui/core";
import OuterBtn from "../Outer";
// import { Box, Button, Text } from "../../kuma-ui/packages/core/dist/index";
// import { Box, Button, Text } from "../../kuma-ui/packages/core/src/index";

// const responsiveStyles = css`
//   @media (max-width: sm) {
//     background: blue;
//   }
// `;

export default function App() {
  return (
    <Box>
      <Text
        textAlign={"center"}
        fontSize="16px"
        fontWeight="bold"
        textDecoration={"underline"}
        color={"colors.primary"}
      >
        Hello world
      </Text>
      <Text
        textAlign={"center"}
        fontSize="16px"
        fontWeight="bold"
        mt={19}
        color={"colors.secondary"}
      >
        Hello world
      </Text>
      <Button bg={"colors.primary"}>Button</Button>
      <OuterBtn />
    </Box>
  );
}
