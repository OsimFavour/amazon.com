import React from 'react'
import CategorySection from './CategorySection'
import MarqueeSection from './MarqueeSection'
import BlogSection from './BlogSection'
import SecondBannerSection from './SecondBannerSection'
import BannerSection from './BannerSection'
import FeaturedSection from './FeaturedSection'
import SpecialProductSection from './SpecialProductSection'
import PopularProductSection from './PopularProductSection'
import BestSellingSection from './BestSellingSection'


const Home = () => {
    return (
        <>
            <BannerSection/>  

            <SecondBannerSection/>

            <CategorySection/>

            <FeaturedSection/>

            <BestSellingSection/>

            <SpecialProductSection/>

            <PopularProductSection/>

            <MarqueeSection/>

            <BlogSection/>

        </>
    )
}

export default Home