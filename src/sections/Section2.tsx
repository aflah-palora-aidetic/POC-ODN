/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, Paper, Typography } from '@mui/material';
import { avatarImages, productScript } from '../constants';
import { MinHeightTextarea } from '../components/DescriptionComponent';
import { SelectableImageList } from '../components/AvatarSelector';
import { useEffect, useState } from 'react';
import { CustomizedSteppers } from '../components/Stepper';
// import vidAv1 from '../assets/av1_vid.webm'
// import vidAv2 from '../assets/av2_vid.webm'
import vidAv3 from '../assets/av3_vid.webm'
// import imgAv1 from '../assets/av1.png'
import imgAv3 from '../assets/av3.jpg'

export const Section2 = () => {
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [script, setScript] = useState<string>('');

    const handleImageSelect = (selected: string) => {
        setSelectedImage(selected);
    };

    useEffect(() => {
        setTimeout(() => {
            setScript(productScript);
        }, 2500);
    }, []);

    return (
        <>
            <Grid
                item
                width={'80%'}
                padding={1}
            >
                <CustomizedSteppers currentSection={1} />
            </Grid>
            <Grid
                container
                flexGrow={1}
                flexWrap={'nowrap'}
                padding={3}
                gap={1}
                sx={{
                    overflow: 'auto',
                    scrollbarWidth: 'thin', // For Firefox
                    scrollbarColor: 'transparent transparent', // For Firefox
                    '&::-webkit-scrollbar': {
                        width: '0px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Grid
                    item
                    container
                    flex={1}
                    direction={'column'}
                    gap={1}
                    minWidth={'50%'}
                >
                    <Paper
                        elevation={3}
                        style={{ borderRadius: '8px' }}
                    >
                        <Grid
                            item
                            // flex={1}
                            maxHeight={'35vh'}
                            overflow={'auto'}
                            sx={{
                                overflow: 'auto',
                                scrollbarWidth: 'thin', // For Firefox
                                scrollbarColor: 'transparent transparent', // For Firefox
                                '&::-webkit-scrollbar': {
                                    width: '0px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            {/* <SelectableImageList avatars={avatarImages} /> */}
                            <Typography
                                variant='h6'
                                textAlign={'center'}
                            >
                                Select an Avatar
                            </Typography>
                            <SelectableImageList
                                onSelect={handleImageSelect}
                                items={avatarImages}
                            />
                        </Grid>
                    </Paper>
                    <Grid
                        item
                        flex={1}
                        maxHeight={'40vh'}
                        overflow={'auto'}
                        sx={{
                            overflow: 'auto',
                            scrollbarWidth: 'thin', // For Firefox
                            scrollbarColor: 'transparent transparent', // For Firefox
                            '&::-webkit-scrollbar': {
                                width: '0px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <MinHeightTextarea
                            value={script}
                            placeholder='Generating the script...'
                            minRows={20}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    flex={1}
                    // bgcolor={'red'}
                >
                    <Paper
                        elevation={3}
                        style={{ borderRadius: '8px' }}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component={'video'}
                            autoPlay
                            loop
                            // muted
                            controls
                            poster={imgAv3}
                            style={{
                                borderRadius: '8px',
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            {selectedImage &&
                           
                                 (
                                    <source
                                        // src={selectedImage === imgAv1 ? vidAv1: selectedImage === imgAv2 ? vidAv2 : vidAv3}
                                        src={vidAv3}
                                        type='video/webm'
                                    />
                                )
                            }
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};
