import React from 'react';
import { Link } from 'gatsby';

const navItems = [
    {
        /*AQUI ESCRIBIMOS LOS NOMBRES DE LA PAGINA 
        Y LAS DIRECCIONES HACIA DONDE VAN*/
    caption: 'Home',
    href: '/',
    },
    {
        caption: 'Products',
        href: '/products'
    }
]

export default (props) => {
    return (
        <header className=' bg-yellow-700 text-white shadow-md'> 
            <nav> 
                <ul className='flex'>
                {
                    navItems.map((item, index)=> 
                        (<li key={index}> 
                            <Link className='hover:bg-yellow-600  px-6 inline-block py-4' to={item.href}>{item.caption}</Link>
                        </li>
                     ))
                }   
                </ul>
            </nav>
        </header>
        
    )
}