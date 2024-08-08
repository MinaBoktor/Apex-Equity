import {Card, CardHeader, CardBody, CardFooter, Text, Heading} from '@chakra-ui/react'


const Cardb = (props) => {
    return(
        <article>
            <div>
                <img src={props.img} alt={props.alt}></img>
            </div>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </article>
    )
}


export default Cardb;