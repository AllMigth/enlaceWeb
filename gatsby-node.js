const slugify = require('slugify');

const slugifyOptions = {
    replacement: '-',
    lower: true
}

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
        type StripeProduct implements Node{
            slug: String!
        }
    `);
}
/*
LOS HOOOKS = SOURCE NODES
GATSBY SOURCE STRIPE MODIFICA LA ESTRUCTURA DE LOS NODOS
ALTERAREMOS EL SCHEMA DE GRAPHQL
TENDRA UN CAMPO SLUG QUE SERA STRING Y SERA OBLIGATORIO
SLUG ES CAMPO QUE NO PUEDE SER NULO

*/
//agregar funcionalidad a un hook llamado create resources
/* un resolver indica como debe llenarse el schema
queremos modificar un nodo stripeproduct*/

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        StripeProduct: {
            slug: {
                resolve:(source) => slugify(source.name, slugifyOptions)
                //ahora retorna el nombre del producto
            }
        }
    })
}
/*el objeto source es el producto
quiero generar un slug a partir de su nombre
entonces instalo una dependencia llamada npm install slugify 
crear un slug en base a un string

AQUI EN GATSBY NODE vamos a crear las paginas con el export
para cada uno de los productos, para eso tambien hay un hook
createPages = permite crear paginas de manera dinamica
*/

    exports.createPages = async({ actions, graphql }) => {
        //recibo actions y graphql
        const products = (await graphql(`
        {
            allStripeProduct {
            nodes {
                slug
                id
                name
            }
            }
        }
        `)).data.allStripeProduct.nodes;

        //ahora voy a iterara cada uno de los productos
        products.forEach( ( product ) => {
            //CREANDO PAGINAS DINAMICAS
            actions.createPage({
                path: `products/${product.slug}`,
                component: require.resolve("./src/templates/product.jsx"),
                context: {
                    id: product.id
                }            
            })
        })
    }
