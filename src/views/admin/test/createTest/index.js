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
  Input,
  Stack,
} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import { Link } from "react-router-dom";
import { assessment } from "Data/mcqData";

const CreateTest = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const [isModalOpen, setModalOpen] = useState(false);
  const [subjects, setSubjects] = useState(assessment.map((value) => value.name));
  const [newSubject, setNewSubject] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    if (newSubject.trim() !== "") {
      setSubjects([...subjects, newSubject]);
      setNewSubject("");
      closeModal();
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="flex-end" mb="20px">
        <Button onClick={openModal}>Add new Subject</Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4, "2xl": 6 }} gap="20px">
        {subjects.map((value, index) => (
          <div key={index}>
            <Link to ="/admin/coursetest">
            <MiniStatistics value={value} />
            </Link>
          </div>
        ))}
      </SimpleGrid>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Subject</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input
                type="text"
                placeholder="Subject Name"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="green" ml={3} onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateTest;
