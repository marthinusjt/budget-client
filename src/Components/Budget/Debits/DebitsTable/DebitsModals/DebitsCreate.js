import React, { useState } from 'react';
import Modali, { useModali } from 'modali';
import coinPlus from '../../../../../Assets/CoinPlusSm.png';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ModalBody,
} from 'reactstrap';

const DebitsCreate = (props) => {
    // console.log(props)

    const [debitsDate, setDebitsDate] = useState('');
    const [debitsSource, setDebitsSource] = useState('');
    const [debitsAmount, setDebitsAmount] = useState('');
    const [createModal, toggleCreateModal] = useModali({
        animated: true,
    });

    const url = `http://localhost:3020/debits/create`

    const handleSubmit = () => {

        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                debits: {
                    incomeDate: debitsDate,
                    incomeSource: debitsSource,
                    incomeAmount: debitsAmount
                }
            })
        })
        .then((res) => {
            res.json();
        })
        .then((debitsData) => {
            console.log(debitsData)
            setDebitsDate('');
            setDebitsSource('');
            setDebitsAmount('');
            props.fetchDebits();
            props.createOff();
            props.createOn();
            // props.refreshPage();
        })
    }

    return(
        <>
            <div className='app'>
                <Button color='success' size='lg' outline block onClick={toggleCreateModal}>
                    <img src={coinPlus} alt='plus' />
                </Button>
                <Modali.Modal {...createModal}>
                    <div style={{textAlign: 'center'}}>
                        <h3>Income Data</h3>
                    </div>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>Date</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='date' name='DebitsDate' pattern='[0-9]{8}' value={debitsDate} onChange={(e) => setDebitsDate(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>Source</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder='Source' type='string' name='DebitsSource' value={debitsSource} onChange={(e) => setDebitsSource(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder='Amount' min={0} type='decimal' name='DebitsAmount' value={debitsAmount} onChange={(e) => setDebitsAmount(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <Modali.Button label='Save' isStyleDefault onClick={() => handleSubmit()}></Modali.Button>
                            <Modali.Button label='Cancel' isStyleCancel onClick={() => toggleCreateModal()}></Modali.Button>
                        </Form>
                    </ModalBody>
                </Modali.Modal>
            </div>
        </>
    )
}

export default DebitsCreate