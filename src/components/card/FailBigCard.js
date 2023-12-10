// BigCard.js
import React from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';



const FailBigCard = () => {
  
  const data = {
    userId: "657477e8408de61e8b719e6b",
    userName: "Omkar Harade",
    // "subjectId": "65744df83bd2f549e90daee4",
    subjectName: "JavaScript",
    // "testRequestId": "6574b420c6cae033e0176eb1",
    // "correctAnsCount": 3,
    // "wrongAnsCount": 17,
    percentage: "15%",
    // "_id": "6575714439071e7cc514ee55",
    // "createdAt": "2023-12-10T08:05:24.966Z",
    updatedAt: "2023-12-10T08:05:24.966Z"
  }
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="column"
    //   justifyContent="center"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="lg"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        UHOH!
      </Text>
      <Text fontSize="2xl" color="gray.600" textAlign="center">
        You Failed The Exam
      </Text>


    </Box>
  );
};

export default FailBigCard;
