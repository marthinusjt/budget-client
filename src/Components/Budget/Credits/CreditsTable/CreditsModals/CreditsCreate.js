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

const CreditsCreate = (props) => {
    // console.log(props)

    const [creditsDate, setCreditsDate] = useState('');
    const [creditsName, setCreditsName] = useState('');
    const [creditsAmount, setCreditsAmount] = useState('');
    const [createModal, toggleCreateModal] = useModali({
        animated: true,
    });

    // const url = `http://localhost:3020/credits/create`
    const url = `https://mjtbudgetserver.herokuapp.com/credits/create`

    const handleSubmit = () => {

        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                credits: {
                    expenseDate: creditsDate,
                    expenseName: creditsName,
                    expenseAmount: creditsAmount
                }
            })
        })
        .then((res) => {
            res.json();
        })
        .then((creditsData) => {
            // console.log(creditsData)
            toggleCreateModal();
            setCreditsDate('');
            setCreditsName('');
            setCreditsAmount('');
            props.fetchCredits();
            // props.createOff();
            // props.createOn();
            // props.refreshPage();
        })
    }

    return(
        <>
            <div className='app'>
                <Button color='danger' size='lg' outline block onClick={toggleCreateModal}>
                    <img src={coinPlus} alt='plus' />
                </Button>
                <Modali.Modal {...createModal}>
                    <div style={{textAlign: 'center'}}>
                        <h3>Expense Data</h3>
                    </div>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>Date</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='date' name='CreditsDate' pattern='[0-9]{8}' value={creditsDate} onChange={(e) => setCreditsDate(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>Name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder='Name' type='string' name='CreditsName' value={creditsName} onChange={(e) => setCreditsName(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder='Amount' min={0} type='decimal' name='CreditsAmount' value={creditsAmount} onChange={(e) => setCreditsAmount(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                            <Modali.Button label='Save' isStyleDefault onClick={() => handleSubmit()} />
                            <Modali.Button label='Cancel' isStyleCancel onClick={() => toggleCreateModal()} />
                        </Form>
                    </ModalBody>
                </Modali.Modal>
            </div>
        </>
    )
}

export default CreditsCreate