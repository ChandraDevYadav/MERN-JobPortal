import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/ReUsable/HeroBanner'
import Notification from '../components/FindJob/Notification'
import CandDetMain from '../components/Candidates/CandDetMain'

const CandidatesDetail = () => {
    return (
        <Layout title={'Know - Candidates Detail'}>
            <HeroBanner
                title="Candidates Details"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Candidates Details" },
                ]}
            />
            <CandDetMain />
            <Notification />
        </Layout>
    )
}

export default CandidatesDetail