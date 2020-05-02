import React from 'react'
import { Link, withAssetPrefix } from 'gatsby'
import Head from '../components/head'
import { rhythm, scale } from "../utils/typography"

import Layout from '../components/layout'

const Success = () => {
    return (
        <Layout>
            <Head title="Success"/>
            <h1 style={{
                ...scale(2),
                marginBottom: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 900,
                letterSpacing: -1,
                }}>The message has been send!
            </h1>
            <Link to="/">
                <p style={{
                ...scale(.6),
                fontFamily: `Lora, sans-serif`,
                marginBottom: '.8em',
                marginTop: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 800, 
                textDecoration: 'none',
            }}>Let`s get back to home page</p></Link>
        </Layout>
    )
}

export default Success