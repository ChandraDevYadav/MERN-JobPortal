import React from 'react'
import Layout from '../components/Layout/Layout'
import AboutHero from '../components/About/AboutHero'
import HowTo from '../components/About/HowTo'
import EasySteps from '../components/Home/EasySteps'
import WhyUs from '../components/About/WhyUs'
import PreAdvertise from '../components/About/PreAdvertise'
import Members from '../components/About/Members'
import ClientTestimonials from '../components/About/ClientTestimonials'
import NewsSection from '../components/Home/NewsSection'
import HeroBanner from '../components/ReUsable/HeroBanner'

const About = () => {
    return (
        <Layout title={'About - Page'}>
            <HeroBanner
                title="About Us"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "About Us" },
                ]}
            />
            <HowTo />
            <EasySteps />
            <WhyUs />
            <PreAdvertise />
            <Members />
            <ClientTestimonials />
            <NewsSection />
        </Layout>
    )
}

export default About