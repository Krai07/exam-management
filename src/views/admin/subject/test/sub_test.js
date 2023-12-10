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
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { assessment } from "Data/mcqData";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const AllTest = () => {
  const param = useParams();
  const subjectId = param.subjectId;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  const [newQuestion, setNewQuestion] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [correctChoice, setCorrectChoice] = useState(null);

  // Separate arrays to store questions for each card
  const [questionsForCard1, setQuestionsForCard1] = useState([]);
  const [questionsForCard2, setQuestionsForCard2] = useState([]);
  // ... add similar state arrays for other cards

  const openModal = (testNumber) => {
    setSelectedTest(testNumber);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTest(null);
    setIsOpen(false);
    setNewQuestion("");
    setChoices(["", "", "", ""]);
    setCorrectChoice(null);
    setIsAddingQuestion(false);
  };

  const handleAddQuestion = () => {
    if (
      newQuestion.trim() === "" ||
      choices.some((choice) => choice.trim() === "") ||
      correctChoice === null
    ) {
      console.error("Question, choices, or correct choice cannot be empty");
      return;
    }

    // Save the new question based on the selected card
    const newQuestionObject = {
      question: newQuestion,
      choices,
      correctChoice,
    };

    switch (selectedTest) {
      case 1:
        setQuestionsForCard1((prevQuestions) => [...prevQuestions, newQuestionObject]);
        break;
      case 2:
        setQuestionsForCard2((prevQuestions) => [...prevQuestions, newQuestionObject]);
        break;
      // ... add similar cases for other cards
      default:
        break;
    }

    // Reset the state after adding the question
    setNewQuestion("");
    setChoices(["", "", "", ""]);
    setCorrectChoice(null);
    setIsAddingQuestion(false);
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
      <Modal isOpen={isOpen && selectedTest === testNumber} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Questions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          {assessment[subjectId].data.map((val, index)=>{
                return(
                    <div>
                        <Text 
                            borderWidth="2px" 
                            borderStyle="solid"
                            borderBottomWidth="4px"
                            textAlign="center"
                            >{val.question}</Text>
                            {val.options.map((opVal, opIdx)=>{
                                return(
                                    <div>
                                        <li>{opVal}</li>
                                    </div>
                                )
                            })}
                    </div>
                )
            })}

            {/* Display the saved questions for the current card */}
            <VStack align="start" mt={4} spacing={2}>
              {getQuestionsForCurrentCard().map((savedQuestion, index) => (
                <Box key={index}>
                  <Text fontWeight="bold">{savedQuestion.question}</Text>
                  <VStack align="start" mt={2} spacing={1}>
                    {savedQuestion.choices.map((choice, choiceIndex) => (
                      <Text key={choiceIndex}>Choice {choiceIndex + 1}: {choice}</Text>
                    ))}
                  </VStack>
                  <Text mt={1}>Correct Choice: Choice {savedQuestion.correctChoice + 1}</Text>
                </Box>
              ))}
            </VStack>

            {/* Conditionally render the input fields for new question */}
            {isAddingQuestion && (
              <Stack spacing={4} mt={4}>
                <Input
                  type="text"
                  placeholder="Type your question here"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
                {choices.map((choice, index) => (
                  <Input
                    key={index}
                    type="text"
                    placeholder={`Choice ${index + 1}`}
                    value={choice}
                    onChange={(e) => {
                      const newChoices = [...choices];
                      newChoices[index] = e.target.value;
                      setChoices(newChoices);
                    }}
                  />
                ))}
                <RadioGroup value={correctChoice} onChange={(value) => setCorrectChoice(value)}>
                  <Flex direction="column">
                  {choices.map((_, choiceIndex) => (
                   <Radio key={choiceIndex} value={choiceIndex}>
                  Choice {choiceIndex + 1} is correct
                  </Radio>
                   ))}
                  </Flex>
                </RadioGroup>
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

  // Helper function to get questions for the currently selected card
  const getQuestionsForCurrentCard = () => {
    switch (selectedTest) {
      case 1:
        return questionsForCard1;
      case 2:
        return questionsForCard2;
      // ... add similar cases for other cards
      default:
        return [];
    }
  };

  return <Flex>{Array.from({ length: 2 }, (_, index) => renderTestCard(index + 1))}</Flex>;
};

export default AllTest;
