import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import giphy from '../../images/giphy1.gif'
import indexStyles from './index.module.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Head from '../components/head'
import Button from '../components/button'


const IndexPage = () => {
    return (  
        <Layout>
          <Head title="Home"/>
          <h1>Hello!!!!</h1>
            <h2>I`m Val, come along if you`d like some great UI!!!!</h2>  
            <h5>Need a developer? <Link to ="/contact">Call me now.</Link></h5>
           
            <Container className="p-3">
                <Row className="justify-content-md-end">
                    <Col lg = "6" xs ="12"><img src={giphy} alt="img" /></Col>
                </Row>
            </Container>
        </Layout>
    )
} 

export default IndexPage