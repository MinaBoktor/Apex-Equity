import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box} from '@chakra-ui/react';
import {HashLink as Link} from 'react-router-hash-link';

const Nav = (props) => {
    return(
        <nav>
            <section>
                <article>
                    <img src={props.logo} alt="comland-logo"></img>
                </article>
                <header>
                    <article>
                        <ul>
                            <li><Link to='/' smooth>Home</Link></li>
                            <li><Link to='#customers' smooth>Customers</Link></li>
                            <li><Link to='#cards' smooth>About</Link></li>
                            <li><Link to='#contact' smooth>Contact us</Link></li>
                        </ul>
                </article>
                </header>
            </section>
        </nav>
    )
}



export default Nav;