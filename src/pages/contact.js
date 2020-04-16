import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import contactStyles from './contact.module.scss'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


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
                <Form.Control placeholder="Your name" input type="text" name="name" />
                <Form.Control placeholder="E-mail" input type="email" name="email" />
                <Form.Control as="textarea" rows="3" placeholder="Your message" input type="text" name="message" />
                  <hr></hr>
              <div className="d-flex justify-content-end">
                <Button variant="primary" size="lg" type="submit" >Let`s do it!</Button>
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