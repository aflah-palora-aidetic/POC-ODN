import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { FC, useEffect, useState } from 'react';
import { productImages } from '../../constants';

interface Props {
    images: {
        img: string;
        title: string;
    }[];
    onChange: (value: string[]) => void;
}

export const MasonryComponent: FC<Props> = ({ images, onChange }) => {
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
                sx={{ height: '93%'}}
            >
                <Masonry
                    columns={3}
                    spacing={2}
                    // sx={{flexFlow: 'nowrap'}}
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
                                border={selectedImages?.includes(item?.img) ? '1px solid #a1a1ff' : ''}
                                borderRadius={'7px'}
                                onClick={() => {
                                    setSelectedImages((prev) => (prev?.includes(item?.img) ? prev?.filter((el) => el !== item?.img) : [...prev, item?.img]));
                                }}
                            ></Box>
                        </div>
                    ))}
                </Masonry>
            </Paper>
        </Box>
    );
};
