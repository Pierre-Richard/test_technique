import react from 'react'
import styled from "styled-components"

const Card = (props) => {
    const { id, title, body } = props

    return (
        <Container>
            <h2><Num>{id}.</Num> {title}</h2>
            <hr />
            <p>{body}</p>
        </Container>
    );
};

const Container = styled.div`
    box-shadow: -2px 10px 56px 0px rgba(0,0,0,0.75);
    border-radius: 1rem;
    width: 50%;
    margin: 2rem auto;
    padding: 2rem;
`

const Num = styled.span`
    color: orange;
`

export default Card;
