import React from 'react'
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { rem } from '@mantine/core';
import CryptoCommunity from '../dashboardComponents/CryptoCommunity';
import CryptoCommunityPost from '../dashboardComponents/CryptoCommunityPost';
import CryptoCommunityArticle from '../dashboardComponents/CryptoCommunityArticle';

const CryptoSocialsCarousel = () => {
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    return (
        <Carousel className=' transform duration-500 hover:-translate-y-2'
            maw={380}
            // mx="auto"
            loop
            withIndicators
            height={200}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            styles={{
                indicator: {
                    width: rem(12),
                    height: rem(4),
                    transition: 'width 250ms ease',

                    '&[data-active]': {
                        width: rem(40),
                    },
                },
            }}
        >
            <Carousel.Slide>
                <CryptoCommunity />
            </Carousel.Slide>
            <Carousel.Slide>
                <CryptoCommunityPost />
            </Carousel.Slide>
            <Carousel.Slide>
                <CryptoCommunityArticle />
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    )
}

export default CryptoSocialsCarousel

