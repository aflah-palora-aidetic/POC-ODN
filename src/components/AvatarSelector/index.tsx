import { FC, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { AIAvatar } from '../../constants';

export const SelectableImageList: FC<{
    items: AIAvatar[];
    onSelect: (a: string) => void;
}> = ({ items, onSelect }) => {
    const [selectedItem, setSelectedItem] = useState<AIAvatar | null>(items[0]);

    const handleItemClick = (item: AIAvatar) => {
        setSelectedItem(item);
        onSelect(item.image);
    };

    return (
        <Grid
            container
            justifyContent={'space-evenly'}
            gap={3}
        >
            {items.map((item) => (
                <Grid
                    item
                    key={item.name}
                    onClick={() => handleItemClick(item)}
                    border={selectedItem === item ? '2px solid #c8c800' : '2px solid transparent'}
                    borderRadius={2}
                    sx={{
                        '&:hover': {
                            backgroundColor: '#c8c800',
                        },
                        objectFit: 'cover'
                    }}
                >
                    <Box
                        component={'img'}
                        sx={{ objectFit: 'cover', cursor: 'pointer' }}
                        width={'120px'}
                        height={'150px'}
                        alt={item.name}
                        src={item.image}
                        borderRadius={2}
                    />
                    <Typography
                        variant='subtitle1'
                        textAlign={'center'}
                    >
                        {item.name}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};
