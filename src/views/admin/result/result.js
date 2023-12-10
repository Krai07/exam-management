// App.js
import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import SuccessBigCard from '../../../components/card/SuccessBigCard';
import FailBigCard from '../../../components/card/FailBigCard';

const theme = extendTheme({
  // Add any custom theme configurations here if needed
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {/* <Box p={8}> */}
        {/* <SuccessBigCard /> */}
        <FailBigCard />
      {/* </Box> */}
    </ChakraProvider>
  );
};

export default App;
