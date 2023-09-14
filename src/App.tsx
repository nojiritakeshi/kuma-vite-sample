import { Box, Spacer, Text } from "@kuma-ui/core";
// import { Spacer, css } from "@kuma-ui/core";
// import { styled } from "@kuma-ui/core";
// import OuterBtn from "../Outer";
// import { StyledTest } from "./StyledDiv";
// import { Box, Button, Text } from "../../kuma-ui/packages/core/src/index";
// import { styled } from "../../kuma-ui/packages/core/src/styled.ts";
import { styled } from "../../kuma-ui/packages/core/dist";

// const responsiveStyles = css`
//   @media (max-width: sm) {
//     background: blue;
//   }
// `;
// const testClass = () => css`
//   color: red;
// `;
const Component = styled("p")`
  color: red;
  font-size: 30;
`;

// const marginOneRem = () => "1rem";

export default function App() {
  // const dynamic = () => "colors.test";
  return (
    <Box color="white">
      <Text
        textAlign={"center"}
        fontSize={10 + 20}
        fontWeight={"fontWeights.sm"}
        textDecoration={"underline"}
        color={"colors.secondary"}
        fontFamily={"fonts.body"}
        mt={"spacings.sm"}
      >
        Hello world
      </Text>
      <Text
        textAlign={"center"}
        fontSize={["24px", "32px"]}
        fontWeight="bold"
        lineHeight={"lineHeights.sm"}
        mt={"100px "}
        color={"colors.secondary"}
      >
        Hello world
      </Text>
      <Spacer grid={"inherit"} horizontal={true} />
      {/* <Text color={dynamic()} fontSize={46}>
        Test text
      </Text> */}
      {/* <Text className={testClass()}>Sub text</Text> */}
      <p style={{ fontSize: 24 }}>Normal P</p>
      <Component fontSize={12}>Componentssss</Component>
      {/* <Button bg={"colors.primary"}>Button</Button>
      <OuterBtn /> */}
    </Box>
  );
}
