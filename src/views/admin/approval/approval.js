// ApprovalTable.js
import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

const ApprovalTable = ({ data, onApprove, onReject }) => {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Exam Subject Name</Th>
            <Th>Date of Request</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
            <Tr>
              <Td>name</Td>
              <Td>Requested Subject Name</Td>
              <Td>Date of Request</Td>
              <Td>
                <Button colorScheme="green" onClick={() => onApprove()}>
                  Approve
                </Button>
                <Button colorScheme="red" ml={2} onClick={() => onReject()}>
                  Reject
                </Button>
              </Td>
            </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default ApprovalTable;
