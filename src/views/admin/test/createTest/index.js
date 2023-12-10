import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import { assessment } from "../../../../Data/mcqData";
import { Link } from "react-router-dom";

const CreateTest = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  // State for managing the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="flex-end" mb="20px">
        <Button onClick={openModal}>Add new Subject</Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4, "2xl": 6 }} gap="20px">
        {assessment.map((value, index) => (
          <div key={index}>
            <Link to="/admin/coursetest">
              <MiniStatistics value={value.name} />
            </Link>
          </div>
        ))}
      </SimpleGrid>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Subject</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your modal content here */}
            {/* You can include form fields or any other content */}
          </ModalBody>
          <ModalFooter>
            {/* You can add footer actions if needed */}
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateTest;
