import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import InfoSection from "./components/InformationSection";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <InfoSection/>
    </div>
    </ChakraProvider>
  );
}

export default App;



