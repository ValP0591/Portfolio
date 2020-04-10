import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import logoIcohotlist from '../static/logo-icohotlist.png'

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
    return (
        <Helmet <link rel="icon" href={logoIcohotlist}/>
    
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
    )
}

export default Head
