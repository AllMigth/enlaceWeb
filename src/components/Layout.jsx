import React, { Fragment } from 'react';
import Nav from './Nav';

export default (props) => {
    return(
        <Fragment>
            <Nav/>
            <main> {props.children} </main>
        </Fragment>
    )
}