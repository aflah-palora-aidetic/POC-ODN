/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Paper, TextField } from '@mui/material';
import { MasonryComponent } from '../components/MasonryComponent';
import { MinHeightTextarea } from '../components/DescriptionComponent';
import { dummyProductImages, productDescription, productImages } from '../constants';
import { useEffect, useState } from 'react';
import { CustomizedSteppers } from '../components/Stepper';

export const Section1 = () => {
    const [pastedURL, setPastedURL] = useState('');
    const [productDescriptionInput, setProductDescriptionInput] = useState('');
    const [images, setImages] = useState<
        {
            img: string;
            title: string;
        }[]
    >(dummyProductImages);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!pastedURL || pastedURL === '') {
            setImages(dummyProductImages);
            setProductDescriptionInput('');
            return;
        } else setLoading(true);
    }, [pastedURL]);

    useEffect(() => {
        if (loading && !!pastedURL) {
            setTimeout(() => {
                setLoading(false);
                setProductDescriptionInput(productDescription);
                setImages(productImages);
            }, 2500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    return (
        <>
            <Grid
                item
                width={'80%'}
                padding={1}
            >
                <CustomizedSteppers currentSection={0} />
            </Grid>

            <Grid
                item
                container
                gap={1}
                paddingX={2}
                flexGrow={1}
            >
                <Grid
                    item
                    flex={1}
                    borderRadius={1}
                    padding={1}
                >
                    <Paper
                        elevation={3}
                        style={{ padding: '20px', borderRadius: '8px' }}
                        sx={{ height: '93%' }}
                    >
                        <Grid
                            container
                            gap={2}
                            justifyContent={'center'}
                            direction={'column'}
                        >
                            <Grid
                                item
                                width={'100%'}
                            >
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    placeholder={'Paste the URL here'}
                                    onChange={(e) => {
                                        setPastedURL(e.target.value);
                                    }}
                                    value={pastedURL}
                                />
                            </Grid>
                            <MinHeightTextarea
                                value={productDescriptionInput}
                                disabled={loading}
                                placeholder={loading ? 'Fetching Product Details...' : ''}
                                minRows={14.5}
                            />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid
                    item
                    flex={1}
                    borderRadius={'8px'}
                    padding={1}
                >
                    <MasonryComponent
                        images={images}
                        onChange={(selectedImages) => {
                            console.log({ selectedImages });
                        }}
                        loading={loading}
                    />
                </Grid>
            </Grid>
        </>
    );
};
