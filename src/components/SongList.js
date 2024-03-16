import React from 'react';
import { List, ListItem } from '@chakra-ui/react';

function SongList({ songs }) {
    return (
        <List styleType="none">
            {songs.map((song, index) => (
                <ListItem key={index} py="1" pl="4" borderBottom="1px solid #ddd">
                    {song}
                </ListItem>
            ))}
        </List>
    );
}

export default SongList;
