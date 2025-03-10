import React from 'react'
import { Helmet } from "react-helmet"
import { Toaster } from "react-hot-toast"
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div className="">
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <main className=''>
                {/* <Toaster /> */}
                {children}
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'JobPort - Search Here',
    description: 'MERN Stack Project',
    keywords: 'mern, react, node, mongodb',
    author: 'CodeHustler'
}

export default Layout