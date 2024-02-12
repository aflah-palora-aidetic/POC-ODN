import { Grid } from '@mui/material';
import { CustomizedSteppers } from '../components/Stepper';
import video from '../assets/video.mp4'

export const Section3 = () => {
    return (
        <>
            <Grid item width={'80%'}>
                <CustomizedSteppers currentSection={2} />
            </Grid>
            <Grid item flexGrow={1}>
                <video
                    autoPlay
                    loop
                    muted
                    controls
                    poster='https://assets.codepen.io/6093409/river.jpg'
                    style={{ borderRadius: '8px' }}
                >
                    <source
                        src={video}
                        type='video/mp4'
                    />
                </video>
            </Grid>
        </>
    );
};
