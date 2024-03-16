import React from 'react';
import Album from './components/Album';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
                <Center>
                    <div>
                        <h1>Cocteau Twins</h1>
                        <Album />
                    </div>
                </Center>
            </Box>
        </ChakraProvider>
    );
}

export default App;
