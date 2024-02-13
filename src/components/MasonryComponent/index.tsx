import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { FC, useEffect, useState } from 'react';
import { productImages } from '../../constants';
import { Grid, Skeleton } from '@mui/material';

interface Props {
    images: {
        img: string;
        title: string;
    }[];
    onChange: (value: string[]) => void;
    loading?: boolean;
}

export const MasonryComponent: FC<Props> = ({ images, onChange, loading }) => {
    const [selectedImages, setSelectedImages] = useState<string[]>(productImages?.map((el) => el?.img));

    useEffect(() => {
        onChange(selectedImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImages]);

    return (
        <Box sx={{ width: '100%',height: '100%' }}>
            <Paper
                elevation={3}
                style={{ padding: '20px', borderRadius: '8px' }}
                sx={{ height: '93%' }}
                
            >
                { loading ? (
                    <Grid container gap={4} justifyContent={'center'}>
                    <Skeleton variant="rectangular" sx={{borderRadius: '8px'}} width={150} height={200} />
                    <Skeleton variant="rectangular" sx={{borderRadius: '8px'}} width={150} height={200} />
                    <Skeleton variant="rectangular" sx={{borderRadius: '8px'}} width={150} height={200} />
                    </Grid>
                ) : (<Masonry
                    columns={3}
                    spacing={2}
                >
                    {images?.map((item, index) => (
                        <div key={index}>
                            <Box
                                component={'img'}
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading='lazy'
                                style={{
                                    width: '80%',
                                    cursor: 'pointer',
                                    objectFit: 'cover',
                                    margin: 0
                                }}
                                border={selectedImages?.includes(item?.img) ? '2px solid #c8c800' : '2px solid transparent'}
                                borderRadius={'7px'}
                                onClick={() => {
                                    setSelectedImages((prev) => (prev?.includes(item?.img) ? prev?.filter((el) => el !== item?.img) : [...prev, item?.img]));
                                }}
                            ></Box>
                        </div>
                    ))}
                </Masonry>)}
            </Paper>
        </Box>
    );
};
