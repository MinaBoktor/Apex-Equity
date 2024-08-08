import {Routes, Route} from 'react-router-dom'
import Contact from './Contact';
import Nav from './Nav';
import Sample from './Sample'

const Landing = (props) => {
    return(
        <main className={props.class}>
            <Routes>
                <Route path='/' element={props.children}></Route>
                <Route path='/contact' element={<>
                <Nav logo={props.logo}></Nav>
                <Contact></Contact>
                <Sample></Sample>
                </>
                }></Route>
            </Routes>
        </main>
    )
}


export default Landing;