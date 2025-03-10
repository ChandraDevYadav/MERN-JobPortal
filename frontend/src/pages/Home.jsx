import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/Home/HeroSection'
import Category from '../components/Home/Category'
import JobList from '../components/Home/JobList'
import EasySteps from '../components/Home/EasySteps'
import TopCompanies from '../components/Home/TopCompanies'
import ChooseUs from '../components/Home/ChooseUs'
import Looking from '../components/Home/Looking'
import Packages from '../components/Home/Packages'
import FeaturedCandidates from '../components/Home/FeaturedCandidates'
import Carousel from '../components/Home/Carousel'
import NewsSection from '../components/Home/NewsSection'

const Home = () => {
    return (
        <Layout title={'Welcome To Jobportal'}>
            <div>
                <HeroSection />
                <Category />
                <JobList />
                <EasySteps />
                <TopCompanies />
                <ChooseUs />
                <Looking />
                <Packages />
                <FeaturedCandidates />
                <Carousel />
                <NewsSection />
            </div>
        </Layout>
    )
}

export default Home