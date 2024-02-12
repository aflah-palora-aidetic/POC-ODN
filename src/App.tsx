import './App.css';
import { Button, Divider, Grid } from '@mui/material';
import { Header } from './components/Header';
import { Section1 } from './sections/Section1';
import { useState } from 'react';
import { Section2, Section3 } from './sections';
import vidAv3 from './assets/av3_vid.webm'

function App() {
    const [currentSection, setCurrentSection] = useState<number>(1);

    const handlePrevious = () => {
        if(currentSection === 1) return;
        setCurrentSection(sec => sec - 1)
    }
    const handleNext = () => {
        if (currentSection === 3) {
            const a = document.createElement('a');
            a.href = vidAv3;
            a.download = vidAv3.split('/').pop() as string;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else setCurrentSection((sec) => sec + 1);
    };

    return (
        <Grid
            container
            flexDirection={'column'}
            alignItems={'center'}
            gap={3}
        >
            <Header />
            <Grid
                item
                container
                direction={'column'}
                minHeight={'80vh'}
                width={'90%'}
                bgcolor={'gray'}
                borderRadius={2}
                gap={2}
                alignItems={'center'}
                sx={{
                    background:
                        'linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 33.65%, rgba(255, 255, 255, 0.40) 65.42%, rgba(255, 255, 255, 0.40) 100%)',
                    border: '1px solid #FFF',
                    overflow: 'auto',
                    scrollbarWidth: 'thin', // For Firefox
                    scrollbarColor: 'transparent transparent', // For Firefox
                    '&::-webkit-scrollbar': {
                        width: '0px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                    },
                    position: 'relative',
                    maxHeight: '90vh',
                    flexWrap: 'nowrap',
                }}
            >

                {currentSection === 1 ? <Section1 /> : currentSection === 2 ? <Section2 /> : currentSection === 3 ? <Section3 /> : ''}

                <Grid
                    item
                    sx={{
                        position: 'sticky',
                        bottom: '0px',
                        backgroundColor: '#e2e5eeed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <Divider variant='fullWidth'></Divider>
                    <Grid
                        container
                        justifyContent={'end'}
                        alignItems={'center'}
                        paddingX={3}
                        paddingY={3}
                        gap={2}
                        >
                        <Button variant='contained' disabled={currentSection===1} onClick={handlePrevious}>Previous</Button>
                        <Button variant='contained' onClick={handleNext}>{currentSection===3 ? 'Download' : 'Next'}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
