import logo from './assets/logo.png';
import './App.css';
import * as React from 'react';
import {ChakraProvider, extendTheme, Center, Divider} from '@chakra-ui/react';
import Nav from './componenets/Nav';
import Landing from './componenets/Landing';
import Hero from './componenets/Hero';
import Cardb from './componenets/Cardb';
import Sample from './componenets/Sample';
import Contact from './componenets/Contact';
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import icon1 from './assets/proven.png'
import icon2 from './assets/client.png'
import icon3 from './assets/innovative.png'
import business from './assets/business.jpg'
import worker from './assets/worker.jpg'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  },
}

const backgroundimg = 'background';
const header = 'header';


const theme = extendTheme({ colors })

// States


function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {setWidth(window.innerWidth)});
    return () => {
      window.removeEventListener("resize", () => {setWidth(window.innerWidth)})
    }
  })
  return (
    <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Landing logo={logo} class={backgroundimg}>              <Nav logo={logo}></Nav>
              <Hero class={header}></Hero>
              <section id="cards" className='cards'>
                <Cardb img={icon1} heading="Proven track record of success" text="Apex Equity has a long history of helping clients achieve their financial goals. The company's team of experienced and knowledgeable investment professionals has consistently outperformed market benchmarks."/>
                <Cardb img={icon2} heading="Client-centric approach" text="Apex Equity is committed to putting its clients first. The company takes a personalized approach to investing, developing tailored investment plans that meet each client's unique needs and risk tolerance. Offering the best possible Service"></Cardb>
                <Cardb img={icon3} heading="Commitment to innovation" text="Apex Equity is constantly at the forefront of the investment industry, using cutting-edge technology and research to identify new opportunities for its clients. The company is also committed to providing its clients with the latest information."></Cardb>
              </section>
              <Divider orientation='horizontal' width="80%" />
              <div id="testo">
                <Sample img={business} alt="business women" text="Apex Equity has been a great partner for me in my investment journey. They have helped me to understand the stock market and make informed investment decisions. I am very pleased with the results so far."></Sample>
                {(width < 1080)?<Divider orientation='horizontal' width="50%" />:<Center padding='2rem' height='250px'><Divider orientation='vertical' /></Center>}
                <Sample img={worker} alt="simple female employee" text="I was initially hesitant to invest in the stock market, but Apex Equity made me feel comfortable and confident. They took the time to explain everything to me in a way that I could understand."></Sample>
              </div>
              <Contact></Contact>
            </Landing>
          </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
