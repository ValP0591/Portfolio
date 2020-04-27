import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'
import Shades from '../components/shades'
import { rhythm, scale } from "../utils/typography"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
                <Shades  style={{
                        ...scale(2),
                        fontFamily: `Raleway, sans-serif`,
                        marginBottom: rhythm(1),
                        marginTop: rhythm(1),
                        color: 'var(--textTitle)',
                        transition: 'color 0.2s ease-out, background 0.2s ease-out',
                        fontWeight: 300,               
                    }}/>
            <p><Link to="/">Let`s get back to home page</Link></p>
        </Layout>
    )
}

export default NotFound