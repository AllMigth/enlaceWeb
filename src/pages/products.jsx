import React from 'react';
import Layout from '../components/Layout';

export default (props) => {
    console.log(props);
    return(
        <Layout>
            {
                props.data.allStripeProduct.nodes.map((product)=>(
                    <li>{product.name}</li>
                ))
            }
        </Layout>
    )
};

export const pageQuery = graphql`
{
	allStripeProduct {
    nodes {
      name
    }
	}
}
`;