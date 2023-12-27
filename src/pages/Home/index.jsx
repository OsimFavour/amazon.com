import React from 'react'
import CategorySection from './CategorySection'
import MarqueeSection from './MarqueeSection'
import BlogSection from './BlogSection'
import SecondBannerSection from './SecondBannerSection'
import BannerSection from './BannerSection'
import FeaturedSection from './FeaturedSection'


const Home = () => {
    return (
        <>
            <BannerSection/>  

            <SecondBannerSection/>

            <CategorySection/>

            <MarqueeSection/>

            <FeaturedSection/>

            <BlogSection/>

        </>
    )
}

export default Home