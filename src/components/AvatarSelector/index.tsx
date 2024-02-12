import { FC, useState } from 'react';
import { ListItemText, Grid, Box } from '@mui/material';
import { AIAvatar } from '../../constants';

export const SelectableImageList: FC<{
    items: AIAvatar[];
    onSelect: (a: string) => void;
}> = ({ items, onSelect }) => {
    const [selectedItem, setSelectedItem] = useState<AIAvatar | null>(null);

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
                    border={selectedItem === item ? '1px solid blue' : ''}
                >
                    <Box
                        component={'img'}
                        sx={{ objectFit: 'cover', cursor: 'pointer' }}
                        width={'200px'}
                        height={'200px'}
                        alt={item.name}
                        src={item.image}
                    />
                    <ListItemText primary={item.name} />
                </Grid>
            ))}
        </Grid>
    );
};