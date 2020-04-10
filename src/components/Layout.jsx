import React, { Fragment } from 'react';
import Nav from './Nav';
import { Helmet } from 'react-helmet'

export default (props) => {
    return(
        <Fragment>
            <Helmet title="SoftYon Store">
                <meta name="description" content="Super cool store to add SWAG de SoftYon"></meta>
            </Helmet>
            <Nav/>
            <main> {props.children} </main>
        </Fragment>
    )
}