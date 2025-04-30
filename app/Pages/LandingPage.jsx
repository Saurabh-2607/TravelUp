import React from 'react';
import HeroSection from '../Sections/HeroSection';
import Category from '../Sections/Category';
import RecentArticles from '../Sections/RecentArticles';


const LandingPage = () => {
    return (
        <div>
        <HeroSection/>
        <Category/>
        <RecentArticles/>
        </div>
    )
};

export default LandingPage;