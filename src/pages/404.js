import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Oops! There is nothing in here</h1>
            <p><Link to="/">Let`s get back to home page</Link></p>
        </Layout>
    )
}

export default NotFound