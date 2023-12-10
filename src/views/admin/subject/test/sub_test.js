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
} from "@chakra-ui/react";

const AllTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const openModal = (testNumber) => {
    setSelectedTest(testNumber);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTest(null);
    setIsOpen(false);
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

            {/* Static 'Add Questions' button */}
            <Flex justifyContent="flex-end" mt={4}>
              <Button colorScheme="blue">
                Add Questions
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {/* Add any additional footer content if needed */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  return <Flex>{Array.from({ length: 5 }, (_, index) => renderTestCard(index + 1))}</Flex>;
};

export default AllTest;
