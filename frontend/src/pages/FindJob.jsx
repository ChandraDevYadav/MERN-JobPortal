import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/ReUsable/HeroBanner'
import JobSearchForm from '../components/FindJob/JobSearchForm'
import PopularJobs from '../components/FindJob/PopularJobs'
import JobList from '../components/Home/JobList'
import Notification from '../components/FindJob/Notification'

const FindJob = () => {
    return (
        <Layout title={'Find - A Job'}>
            <div>
                <HeroBanner
                    title="Find a Job"
                    backgroundImage="./ab1.jpg"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label: "Find A Job" },
                    ]}
                />
                <JobSearchForm />
                <PopularJobs />
                <JobList />
                <Notification />
            </div>
        </Layout>
    )
}

export default FindJob