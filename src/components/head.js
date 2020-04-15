import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
<<<<<<< HEAD
    return (
        <Helmet link={[
            {"rel": "icon", 
             "type": "image/png", 
             "href": "favicon.png"
            }
           ]}
           title={`${title} | ${data.site.siteMetadata.title}`}/>
=======
    return (   
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
>>>>>>> b8fa489b4dd9704ed67786ed77dc30ffe812ca1a
    )
}

export default Head
