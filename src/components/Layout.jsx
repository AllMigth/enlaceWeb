import React, { Fragment } from 'react';
import Nav from './Nav';
import SEO from './SEO';
//import { Helmet } from 'react-helmet';

export default (props) => {
    return(
        <Fragment>
            <SEO />            
            <Nav />
            <main className="max-w-4xl mx-auto"> {props.children} </main>
        </Fragment>
    )
}