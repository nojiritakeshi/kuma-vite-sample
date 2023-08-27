import { Box, Button, Spacer, Text } from "@kuma-ui/core";
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
    <Box color="white">
      <Text
        textAlign={"center"}
        fontSize={"fontSizes.sm"}
        fontWeight={"fontWeights.sm"}
        textDecoration={"underline"}
        color={"colors.primary"}
        fontFamily={"fonts.body"}
        mt={"spacings.sm"}
      >
        Hello world
      </Text>
      <Text
        textAlign={"center"}
        fontSize="16px"
        fontWeight="bold"
        lineHeight={"lineHeights.sm"}
        mt={19}
        color={"colors.secondary"}
      >
        Hello world
      </Text>
      <Spacer grid={"inherit"} horizontal={true} />
      <Text color={"colors.test"}>Test text</Text>
      <Text color={"colors.sub"}>Sub text</Text>
      <Button bg={"colors.primary"}>Button</Button>
      <OuterBtn />
    </Box>
  );
}
