import React from 'react'
import Header from './header'
import Footer from './footer'
import '../Styles/index.scss'
import layoutStyles from './layout.module.scss'
import  Container from 'react-bootstrap/Container'
import { rhythm, scale } from "../utils/typography"


const Layout = (props) => {
    return (
        <div>         
             
            <div className={layoutStyles.container}>
            <Header />  
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Layout