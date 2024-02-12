import { Grid } from '@mui/material';
import { CustomizedSteppers } from '../components/Stepper';
import vidAv3 from '../assets/av3_vid.webm'
import imgAv3 from '../assets/av3.jpg'

export const Section3 = () => {
    return (
        <>
            <Grid
                item
                width={'80%'}
            >
                <CustomizedSteppers currentSection={2} />
            </Grid>
            <Grid
                item
                flexGrow={1}
            >
                <video
                    autoPlay
                    loop
                    muted
                    controls
                    poster={imgAv3}
                    style={{
                        borderRadius: '8px',
                        objectFit: 'cover',
                        width: '500px',
                        height: '100%',
                    }}
                >
                    <source
                        src={vidAv3}
                        type='video/webm'
                    />
                </video>
            </Grid>
        </>
    );
};
