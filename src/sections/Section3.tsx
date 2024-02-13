import { Box, Grid } from '@mui/material';
import { CustomizedSteppers } from '../components/Stepper';
import final from '../assets/final.mp4'
import imgAv3 from '../assets/av3.jpg'

export const Section3 = () => {
    return (
        <>
            <Grid
                item
                width={'80%'}
                padding={1}
            >
                <CustomizedSteppers currentSection={2} />
            </Grid>
            <Grid
                item
                flexGrow={1}
                height={'460px'}
            >
                <Box
                    component={'video'}
                    autoPlay
                    loop
                    controls
                    poster={imgAv3}
                    style={{
                        borderRadius: '8px',
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <source
                        src={final}
                        type='video/webm'
                    />
                </Box>
            </Grid>
        </>
    );
};
