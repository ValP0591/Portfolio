import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-plugin-transition-link'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery (graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return ( 
          
        <header className={headerStyles.header}>
         {/* <Row> 
            <Col md={{ }}> 
              <h1>
                  <Link className={headerStyles.title} to = "/">
                    { data.site.siteMetadata.title }
                  </Link>
              </h1>
            </Col>
          </Row>*/}
          <Row>
            <Col xs ={10} sm={11}>            
              <nav>
                <ul className={headerStyles.navList}>
                  <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} cover to="/" direction="left" bg="#6c757d" duration={2}>First</AniLink></li>
                  <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} cover to = "/about" bg="#6c757d" direction="right">bio</AniLink></li>
                  <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} paintDrip to ="/blog" hex="#6c757d" duration={1} >Blog</AniLink></li>
                </ul>
                
              </nav>
            </Col>
            <Col xs ={2} sm={ 1 }>          
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <label style={{
                      backgroundColor: 'var(--hr)',
                      transition: 'color 1s ease-out, background 0.7s ease-out',
                      borderRadius: '90em',
                      padding: '0.1rem',
                      cursor: 'pointer',
                    }}>
                      <svg
                        version="1.1"
                        width="27"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="var(--logo)"
                      >
                        <path
                          d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"
                          class="icon-module--icon--1ihz7"
                        ></path>
                      </svg>
                      <input 
                        type="checkbox"
                        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                        checked={theme === 'dark'}
                      />{' '}
                    </label> 
                  )}
                </ThemeToggler>              
            </Col>
          </Row>
          
        </header>
      
    )
}

export default Header