import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image, Box, Text } from '@chakra-ui/react';
import SongList from './SongList';
import albumsData from '../albumsData';

function Album() {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {albumsData.map((album, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton>
                            <Box display="flex" alignItems="center">
                                <Image src={album.image} alt={album.title} boxSize="80px" borderRadius="md" mr="2" />
                                <Text flex="1" textAlign="left">{album.title}</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <SongList songs={album.songs} />
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default Album;
