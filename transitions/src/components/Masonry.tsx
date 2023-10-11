// import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Reveal } from './Reveal';

export default function ImageMasonry({jsonData}) {
    return (
        <div>
            <Box className='mt-16 m-auto' sx={{width: 1280, minHeight: 829}}>
            <Reveal>
                <h2 className='font-display text-4xl mb-9'>Illustrations</h2>
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

// const itemData = [
//     {
//       img: 'https://i.pinimg.com/474x/ed/c6/49/edc6497b851111aa39f5afd528abbc7d.jpg',
//       title: 'Fern',
//     },
//     {
//       img: 'https://i.pinimg.com/564x/cd/6e/ee/cd6eee2b1de5f63def9f219774da40e2.jpg',
//       title: 'Snacks',
//     },
//     {
//       img: 'https://i.pinimg.com/564x/76/7b/fb/767bfb4a105431927b473e0ea9a91a2e.jpg',
//       title: 'Mushrooms',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/17/8e/20/178e2071fa852cb419c487cf9467b40b.jpg',
//       title: 'Tower',
//     },
//     {
//       img: 'https://i.pinimg.com/564x/51/30/53/513053c642054e1934dd4b11c322897f.jpg',
//       title: 'Sea star',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/fb/e5/cf/fbe5cf124ccdf9560de9894ceedad42b.jpg',
//       title: 'Honey',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/b3/ed/da/b3edda21b97a0fe2417a39af51bad473.jpg',
//       title: 'Basketball',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/69/87/54/698754d6ebbbd045501bd2e3b1c3c72c.jpg',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/c0/c1/3c/c0c13c01f6f8de8691b721daaaa2b433.jpg',
//       title: 'Tree',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/db/2e/11/db2e1169f42193f21f8e9a2b90df0180.jpg',
//       title: 'Burger',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/84/56/ea/8456ea3b013e1c99e64ded7c76155a7c.jpg',
//       title: 'Camera',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/a8/cd/43/a8cd432a580e326b025ab4b2eac4b916.jpg',
//       title: 'Coffee',
//     },
//     {
//       img: 'https://i.pinimg.com/564x/ef/f2/84/eff2842bfd78040664065b72c2775757.jpg',
//       title: 'Camping Car',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/f2/59/fe/f259fed81483ac2f21efc182cb19a663.jpg',
//       title: 'Hats',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/92/27/67/9227673701c99685f0c21565e1e11aa1.jpg',
//       title: 'Tomato basil',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/31/32/f6/3132f67805a9ae9e6018df7185a62ed4.jpg',
//       title: 'Mountain',
//     },
//     {
//       img: 'https://i.pinimg.com/474x/c3/61/f5/c361f5e917e0faee250ee70fcfdae6a9.jpg',
//       title: 'Bike',
//     },
//   ];

