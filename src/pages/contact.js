import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import contactStyles from './contact.module.scss'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { rhythm, scale } from "../utils/typography"



const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>       
          <h1 style={{
            ...scale(2),
            marginBottom: rhythm(1),
            color: 'var(--textTitle)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            letterSpacing: -1,
        }}
        >Get in Touch</h1>
          <p style={{
            ...scale(.5),
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
            color: 'var(--textTitle)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            fontWeight: 300,               
          }}
          >Let me help you kick start your next project</p>
          <div>
            <form className={contactStyles.formContainer} form method="POST" netlify-honeypot="bot-field" data-netlify="true"> 
              <input type="hidden" name="bot-field"/>
                <Form.Control placeholder="Your name" input type="text" name="name" style={{
                ...scale(.8),
                fontFamily: `Raleway, sans-serif`,
                textTransform: 'uppercase',
                marginBottom: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 200,
                letterSpacing: -1,
                }}/>
                <Form.Control placeholder="E-mail" input type="email" name="email" style={{
                ...scale(.8),
                fontFamily: `Raleway, sans-serif`,
                textTransform: 'uppercase',
                marginBottom: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 200,
                letterSpacing: -1,
                }}/>
                <Form.Control as="textarea" rows="3" placeholder="Some thoughts about your project to be" input type="text" name="message" style={{
                ...scale(.8),
                fontFamily: `Raleway, sans-serif`,
                textTransform: 'uppercase',
                marginBottom: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 200,
                letterSpacing: -1,
                }}/>
                  <hr></hr>
              <div className="d-flex justify-content-end">
                <Button variant="secondary" type="submit" style={{
                        ...scale(.8),
                        fontFamily: `Titillium Web, sans-serif`,
                        color: 'var(--buttonText)',
                        padding: '1rem', 
                        borderRadius: '3px',
                        transition: 'color 1.2s ease-out, background 0.2s ease-out',
                        fontWeight: 800,   
                        textTransform: 'uppercase',       
                    }}>Let's do it!</Button>
              </div>
            </form>
          </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`