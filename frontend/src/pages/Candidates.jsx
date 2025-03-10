import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/ReUsable/HeroBanner'
import CandidateList from '../components/Candidates/CandidateList'
import Notification from '../components/FindJob/Notification'

const Candidates = () => {
    return (
        <Layout title={'Explore - All Candidates'}>
            <HeroBanner
                title="Candidates"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Candidates" },
                ]}
            />
            <CandidateList />
            <Notification />
        </Layout>
    )
}

export default Candidates