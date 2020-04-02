import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery (graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)


  return (
      <footer className={footerStyles.footer}>
          <p>This site is made by {data.site.siteMetadata.author} 2020</p>
      </footer>
    )
}

export default Footer