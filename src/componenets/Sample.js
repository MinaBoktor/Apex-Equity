


const Sample = (props) => {
    return(
        <section id="customers">
            <article>
                <img src={props.img} alt={props.alt}></img>
            </article>
            <article>
                <q><i>{props.text}</i></q>
            </article>
        </section>
    )
}

export default Sample;