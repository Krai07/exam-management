import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Stack,
} from "@chakra-ui/react";

const AllTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  const openModal = (testNumber) => {
    setSelectedTest(testNumber);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTest(null);
    setIsOpen(false);
    setNewQuestion("");
    setIsAddingQuestion(false); // Reset the flag on modal close
  };

  const handleAddQuestion = () => {
    // Add your logic here to handle the new question
    console.log("Adding question:", newQuestion);
    setNewQuestion(""); // Clear the input field after adding the question
    setIsAddingQuestion(false); // Reset the flag after adding the question
  };

  const renderTestCard = (testNumber) => (
    <Box
      key={testNumber}
      bg="white"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      m={2}
      width="200px"
      textAlign="center"
      cursor="pointer"
      onClick={() => openModal(testNumber)}
    >
      <Text fontSize="xl" fontWeight="bold">
        Test {testNumber}
      </Text>
      <Text mt={2}>Test Description or any relevant information</Text>
      <Modal isOpen={isOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Questions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add content for the modal body here */}
            <Text>Questions for Test {selectedTest}</Text>

            {/* Conditionally render the input field */}
            {isAddingQuestion && (
              <Stack spacing={4} mt={4}>
                <Input
                  type="text"
                  placeholder="Type your question here"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            {/* Static 'Add Questions' button */}
            {!isAddingQuestion && (
              <Flex justifyContent="flex-end">
                <Button colorScheme="blue" onClick={() => setIsAddingQuestion(true)}>
                  Add Question
                </Button>
              </Flex>
            )}

            {/* 'Save' button to save the question */}
            {isAddingQuestion && (
              <Flex justifyContent="flex-end">
                <Button colorScheme="green" onClick={handleAddQuestion}>
                  Save
                </Button>
              </Flex>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  return <Flex>{Array.from({ length: 5 }, (_, index) => renderTestCard(index + 1))}</Flex>;
};

export default AllTest;
