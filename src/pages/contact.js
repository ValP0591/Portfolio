import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import contactStyles from './contact.module.scss'
import Button from 'react-bootstrap'


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
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project</p>
          <div>
            <form className={contactStyles.formContainer} form method="post" netlify-honeypot="bot-field" data-netlify="true">
              <input type="hidden" name="bot-field"/>
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <label>
                Name
                <input type="text" name="name" />
              </label>
              <label>
                Message
                <input type="text" name="message" />
              </label>
              <hr></hr>
              <button type="submit">Let`s do it!</button>
              
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