/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Paper, Typography } from '@mui/material';
import { avatarImages, productScript } from '../constants';
import { MinHeightTextarea } from '../components/DescriptionComponent';
import { SelectableImageList } from '../components/AvatarSelector';
import { useState } from 'react';
import { CustomizedSteppers } from '../components/Stepper';
import video from '../assets/video.mp4';

export const Section2 = () => {

    const [selectedImage, setSelectedImage] = useState<string>('');

    const handleImageSelect = (selected: string) => {
        setSelectedImage(selected)
    };

    return (
        <>
            {/* <Grid item>
                <Typography
                    textAlign={'center'}
                    variant='h4'
                    fontFamily={'sans-serif'}
                >
                    Step 2: Select Avatar & Preview the output
                </Typography>
            </Grid> */}
            <Grid item width={'80%'}>
                <CustomizedSteppers currentSection={1} />
            </Grid>
            <Grid
                container
                flexGrow={1}
                flexWrap={'nowrap'}
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
                            <Typography variant='h6' textAlign={'center'} >Select an Avatar</Typography>
                            <SelectableImageList onSelect={handleImageSelect} items={avatarImages}/>
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
                        handleChange={() => {}}
                            value={productScript}
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
                        sx={
                            {
                                // backgroundColor: 'blue',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        }
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            controls
                            poster={selectedImage ? selectedImage : 'https://media.istockphoto.com/id/1266094665/vector/white-online-play-video-icon-isolated-with-long-shadow-film-strip-with-play-sign-red-circle.jpg?s=612x612&w=0&k=20&c=ZVrOVnzTu_xEvzuXaRdCPk3lxwA7UMPSBeIGH3il1vg='}
                            style={{borderRadius: '8px'}}
                        >
                            {selectedImage && <source
                                src={video}
                                type='video/mp4'
                            />}
                        </video>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};
