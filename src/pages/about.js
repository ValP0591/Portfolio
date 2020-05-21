import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { rhythm, scale } from "../utils/typography"
import Button from 'react-bootstrap/Button'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
              <h1 style={{
                ...scale(2),
                marginBottom: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 900,
                letterSpacing: -1,
                }}
                >About me</h1>
            <div style={{
                ...scale(.5),
                fontFamily: `Raleway, sans-serif`,
                marginBottom: rhythm(1),
                marginTop: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 300,     
            }}>
              <p>I`m 36 yo and have 10 years of experience in UI</p>
              <p>I create this site with Gatsby and Contentful</p>
              <p>Java Script is my one and only programming language to use. <br>
              </br>Since the moment I get to know it I fell in love with JS.</p>
        
              <p>So, what are you waiting for? </p></div> 
              <Button variant="outline-secondary"><AniLink paintDrip to ="/contact/" hex="#6c757d"
                style={{
                    ...scale(.8),
                    fontFamily: `Titillium Web, sans-serif`,
                    color: 'var(--textLink)',
                    padding: '1rem', 
                    borderRadius: '3px',
                    transition: 'color 1.2s ease-out, background 0.2s ease-out',
                    fontWeight: 800,   
                    textTransform: 'uppercase', 
                    textShadow: '1px 1px 4px black',       
                }}>
                    One click is all it takes.</AniLink></Button>
        </Layout>    
    )
}

export default AboutPage


