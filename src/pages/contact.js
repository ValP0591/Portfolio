import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>My contacts</h1>
            <p>Please be sure You can always find me here 24/7</p>
            <p><a href ="https://www.google.com">google me</a></p>
        </Layout>
    )
}

export default ContactPage