const slugify = require('slugify');

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
                resolve:(source) => source.id
            }
        }
    })
}
/*el objeto source es el producto
quiero generar un slug a partir de su nombre
entonces instalo una dependencia llamada npm install slugify 
crear un slug en base a un string
*/