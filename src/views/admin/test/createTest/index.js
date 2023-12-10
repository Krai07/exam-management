import React from "react";
import { Box, SimpleGrid, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import { assessment } from "../../../../Data/mcqData";
import { Link } from "react-router-dom";
const CreateTest = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="flex-end" mb="20px">
        <Button
          // onClick={() => {
          //   openNewTab(`/coursetest`) // Open a new tab with a unique URL
          // }}
        >
          Add new  Subject
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4, "2xl": 6 }} gap="20px">
        {/* Card 1 */}
        <Link
        to="/admin/coursetest"
        >
          <MiniStatistics
            // name={assessment[0].name}
            // value={assessment[0].JavaData[0].questionNo}
            value={assessment[0].name}
          />
        </Link>

        {/* Card 2 */}
        <Button
          onClick={() => {
            // Add your onClick logic here
            console.log("Card 2 clicked");
          }}
          variant="unstyled"
        >
          <MiniStatistics
            name={assessment[0].name}
            value={assessment[0].JavaData[0].questionNo}
          />
        </Button>

        {/* Card 3 */}
        <Button
          onClick={() => {
            // Add your onClick logic here
            console.log("Card 3 clicked");
          }}
          variant="unstyled"
        >
          <MiniStatistics
            name={assessment[0].name}
            value={assessment[0].JavaData[0].questionNo}
          />
        </Button>

        {/* Card 4 */}
        <Button
          onClick={() => {
            // Add your onClick logic here
            console.log("Card 4 clicked");
          }}
          variant="unstyled"
        >
          <MiniStatistics
            name={assessment[0].name}
            value={assessment[0].JavaData[0].questionNo}
          />
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default CreateTest;
