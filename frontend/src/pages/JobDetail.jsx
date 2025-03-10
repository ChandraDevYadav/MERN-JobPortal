import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/ReUsable/HeroBanner'
import Notification from '../components/FindJob/Notification'
import JobMain from '../components/JobDetail/JobMain'

const JobDetail = () => {
    return (
        <Layout title={'Job Detail - Page'}>
            <HeroBanner
                title="Job Detail"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Job Detail" },
                ]}
            />
            <JobMain />
            <Notification />
        </Layout>
    )
}

export default JobDetail