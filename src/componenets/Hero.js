import { HashLink as Link } from "react-router-hash-link";

const Hero = (props) => {
    return(
        <section className={props.class}>
            <article>
                <h1>Your Trusted Partner in the Stock Market</h1>
                <p>We help you navigate the complexities of the stock market and achieve your financial goals.</p>
            </article>
            <article>
                <Link to='#contact' smooth><button>Get Started</button></Link>
            </article>
        </section>
    )
}

export default Hero;