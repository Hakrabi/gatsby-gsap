import React from "react"
import { Helmet } from "react-helmet"

import Header from './Header'
import Footer from './Footer/Footer'

import '../scss/main.scss'


function LayoutDefault({children, pageName}){
    return(
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Clever Code Lab</title>
            </Helmet>
            <Header/>
            <div className="scroller">
                {children}
                <Footer pageName={pageName}/>
            </div>
        </>
    )
}

export default LayoutDefault
