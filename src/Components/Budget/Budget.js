import React, { useState } from 'react';
import Income from './Income/Income';
import Debits from './Debits/Debits';
import Credits from './Credits/Credits';
import {
    Col,
    Container,
    Jumbotron,
    Row
} from 'reactstrap'

const Budget = (props) => {
    // console.log(props)

    const [creditsAmount, setCreditsAmount] = useState([]);
    const [debitsAmount, setDebitsAmount] = useState([]);

    console.log(creditsAmount);
    // console.log(debitsAmount);

    return(
        <div>
            <Jumbotron fluid style={{backgroundColor: 'lightblue'}} >
                <Container style={{textAlign: 'center', height: '3em', }}>
                    <Income token={props.token} creditsAmount={creditsAmount} debitsAmount={debitsAmount} />
                </Container>
            </Jumbotron>
            <br />
            <Row style={{textAlign: 'center',}}>
                <Col sm='1' />
                <Col sm='4'>
                    <h1>Income</h1>
                    <hr />
                    <Debits token={props.token} setDebitsAmount={setDebitsAmount} />
                </Col>
                <Col sm='2'></Col>
                <Col sm='4'>
                    <h1>Expenses</h1>
                    <hr />
                    <Credits token={props.token} setCreditsAmount={setCreditsAmount} />
                </Col>
                <Col sm='1' />
            </Row>
        </div>
    )
}

export default Budget