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
         
         <form method="post" netlify-honeypot="bot-field" data-netlify="true">
           <input type="hidden" name="bot-field" />
                    <label>
                      Name
                      <input type="text" name="name" id="name" />
                    </label>
                    <label>
                      Email
                      <input type="email" name="email" id="email" />
                    </label>
                    <label>
                      Subject
                      <input type="text" name="subject" id="subject" />
                    </label>
                    <label>
                      Message
                      <textarea name="message" id="message" rows="5" />
                    </label>
                    <button type="submit">Send</button>
                    <input type="reset" value="Clear" />

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
                    </form>
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