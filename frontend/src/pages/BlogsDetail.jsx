import React from 'react'
import Layout from '../components/Layout/Layout'
import Notification from '../components/FindJob/Notification'
import HeroBanner from '../components/ReUsable/HeroBanner'
import BlogMain from '../components/Blog/BlogMain'

const BlogsDetail = () => {
    return (
        <Layout title={'Blog Details - Of Id'}>
            <HeroBanner
                title="Blog Detail"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Blog Detail" },
                ]}
            />
            <BlogMain />
            <Notification />
        </Layout>
    )
}

export default BlogsDetail