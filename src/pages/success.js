import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'

const Success = () => {
    return (
        <Layout>
            <Head title="Success"/>
            <h1>The message has been send!</h1>
            <p><Link to="/">Let`s get back to home page</Link></p>
        </Layout>
    )
}

export default Success