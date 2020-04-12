import "./src/styles/global.css";


//aqui se importan archivos que unicamente se deben importar
//EN EL NAVEGADOR

/**se tiene que exportar wrapWithProvider con la funcion 
 * wrapRootElement
 */
import wrapWithProvider from './src/wrap-with-provider';
export const wrapRootElement = wrapWithProvider;


/**tenemos que hacer lo mismo pero en otro contexto que es
 * gatsby-ssr.js quee s como la configuracion del render en el servidor
 * 
 */