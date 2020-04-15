import React from 'react';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { graphql } from 'gatsby';

//componentes para exponer los datos
export default (props) => {
	const products = props.data.allStripeProduct.nodes;
	return(
			<Layout>
					<Products products={products} />
			</Layout>
	)
};

//componentes para extraer la consulta
export const pageQuery = graphql`
{
allStripeProduct {
	nodes {
			id
		name
	}
}
}
`;
/*PAGINA PARA MOSTRAR TODOS LOS PRODUCTOS */