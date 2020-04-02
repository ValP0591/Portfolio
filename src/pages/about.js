import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
              <h1>About me</h1>
              <p>I`m 36 yo and have 10 years of experience in UI</p>
              <p>I create this site with Gatsby</p>
              <p>So, what are you waiting for? <Link to ="/contact">Call me now.</Link></p>
        </Layout>    
    )
}

export default AboutPage


