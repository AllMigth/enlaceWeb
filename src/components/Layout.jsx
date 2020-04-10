import React, { Fragment } from 'react';
import Nav from './Nav';
//import { Helmet } from 'react-helmet';

export default (props) => {
    return(
        <Fragment>
                        
            <Nav/>
            <main> {props.children} </main>
        </Fragment>
    )
}