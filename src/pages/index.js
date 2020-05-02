import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import giphy from '../../images/giphy1.gif'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Head from '../components/head'
import Button from 'react-bootstrap/Button'
import { rhythm, scale } from "../utils/typography"
import Hello from '../components/hello'

const IndexPage = () => {
    return (  
        <Layout>
          <Head title="Home"/>
            <Row>
                <Col>
                    <Hello/>
                </Col>
            </Row>
            
            <Row>
                <Col Col lg = "10" sm = "10" md = "8" xs ="12"><h2
                    style={{
                        ...scale(.5),
                        fontFamily: `Raleway, sans-serif`,
                        marginBottom: rhythm(1),
                        marginTop: rhythm(1),
                        color: 'var(--textTitle)',
                        transition: 'color 0.2s ease-out, background 0.2s ease-out',
                        fontWeight: 300,               
                    }}
            >I`m Val, come along if you`d like to make something special with your web app!</h2></Col></Row>
            <h5
            style={{
                ...scale(.6),
                fontFamily: `Lora, sans-serif`,
                marginBottom: '.8em',
                marginTop: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 800,
              
            }}
            >Need a developer?</h5>
            
            <Button variant="secondary"><Link to ="/contact/"
                style={{
                    ...scale(.8),
                    fontFamily: `Titillium Web, sans-serif`,
                    color: 'var(--textLink)',
                    padding: '1rem', 
                    borderRadius: '3px',
                    transition: 'color 1.2s ease-out, background 0.2s ease-out',
                    fontWeight: 800,   
                    textTransform: 'uppercase', 
                    textShadow: '1px 1px 1px black',       
                }}
            >Call me now</Link></Button>
           
            <Container className="p-3">
                <Row className="justify-content-md-center">
                    <Col lg = "1" sm = "3" md = "6" xs ="12"><img src={giphy} alt="img" style={{ borderRadius: '180px 180px 15px 15px', maxWidth: rhythm(11), maxHeight: rhythm(16), marginTop: rhythm(-.5), marginBottom: rhythm(-2),}} /></Col>
                </Row>
            </Container>
        </Layout>
    )
} 

export default IndexPage