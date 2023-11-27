// import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Reveal } from './Reveal';

interface ImageMasonryProps {
    jsonData: Array<{
        img: string;
        title: string;
    }>;
}

export default function ImageMasonry({jsonData}: ImageMasonryProps) {
    return (
        <div>
            <Box className='mt-16 m-auto' sx={{width: 1280, minHeight: 829}}>
            <Reveal>
                <h2 className='font-display text-4xl mb-9'>Illustration List</h2>
            </Reveal>
                    <Masonry columns={2} spacing={2}>
                {jsonData.map((item) => (
                    <div>

                        <Reveal>
                        <img
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=162&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                        />
                        </Reveal>
                    </div>
                ))}
            </Masonry>
        </Box>
        </div>
    )
}


