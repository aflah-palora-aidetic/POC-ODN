import { List, ListItem, ListItemAvatar, Tooltip, Box, Avatar, ListItemText, Typography } from '@mui/material';
import { FC, useState } from 'react';

type AIAvatar = {
    name: string;
    image: string;
};

export const SelectableImageList: FC<{ avatars: AIAvatar[] }> = ({ avatars }) => {
    const [selectedAvatar, setSelectedAvatar] = useState<AIAvatar | null>(null);

    const handleAvatarClick = (avatar: AIAvatar) => {
        setSelectedAvatar(avatar);
    };

    return (
        <List>
            {avatars?.map((avatar) => (
                <ListItem
                    key={avatar.name}
                    button
                    selected={selectedAvatar === avatar}
                    onClick={() => handleAvatarClick(avatar)}
                >
                    <ListItemAvatar>
                        <Tooltip
                            title={
                                <Box
                                    component={'img'}
                                    src={avatar.image}
                                    width={'200px'}
                                    height={'200px'}
                                ></Box>
                            }
                        >
                            <Avatar
                                alt={avatar.name}
                                src={avatar.image}
                            />
                        </Tooltip>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant='subtitle1'>{avatar.name}</Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
};
