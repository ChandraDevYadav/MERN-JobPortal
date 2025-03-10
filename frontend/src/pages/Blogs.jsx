import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/ReUsable/HeroBanner'
import Notification from '../components/FindJob/Notification'
import NewsTipsTool from '../components/Blog/NewsTipsTool'
import Pagination from '../components/ReUsable/Pagination'

const Blogs = () => {
    return (
        <Layout title={'Blogs - Know everything'}>
            <HeroBanner
                title="Blog"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Blog" },
                ]}
            />
            <NewsTipsTool />
            <Pagination />
            <Notification />
        </Layout>
    )
}

export default Blogs