import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroBanner from '../components/ReUsable/HeroBanner'
import Notification from '../components/FindJob/Notification'
import ContactCard from '../components/Contact/ContactCard'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
    return (
        <Layout>
            <HeroBanner
                title="Contact Us"
                backgroundImage="./ab1.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Contact Us" },
                ]}
            />
            <ContactCard />
            <ContactForm />
            <Notification />
        </Layout>
    )
}

export default Contact