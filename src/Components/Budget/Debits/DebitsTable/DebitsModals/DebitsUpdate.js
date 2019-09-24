import React, { useState } from 'react';
import Modali, { useModali } from 'modali'
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    ModalBody,
} from 'reactstrap'

const baseURL = `http://localhost:3020/debits`

const DebitUpdate = (props) => {
    console.log(props)

    const [editDate, setEditDate] = useState(props.debitToUpdate.incomeDate);
    const [editSource, setEditSource] = useState(props.debitToUpdate.incomeSource);
    const [editAmount, setEditAmount] = useState(props.debitToUpdate.incomeAmount);


    const deleteDebit = (e) => {
        // e.preventDefault();

        let url = `${baseURL}/delete/${props.debitToUpdate.id}`
        console.log(url)

        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchDebits();
            props.updateOff();
            props.refreshPage();
        })
    }


    const updateDebit = (e) => {
        // e.preventDefault();

        let url = `${baseURL}/update/${props.debitToUpdate.id}`
        console.log(url);

        fetch(url, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                debits: {
                    incomeDate: editDate,
                    incomeSource: editSource,
                    incomeAmount: editAmount
                }
            })
        })
        .then((res) => {
            props.fetchDebits();
            props.updateOff();
            props.refreshPage();
        })

    }

    return(
        <>
            <Modali.Modal {...props.updateModal}>
                <div style={{textAlign: 'center'}}>
                    <h3>Update</h3>
                </div>
                    <ModalBody>
                        <Form onSubmit={updateDebit}>
                            <FormGroup>
                                <Label htmlFor='DebitsDate'>Edit Date:</Label>
                                <Input type='date' name='DebitsDate' pattern='[0-9]{8}' value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='Source'>Edit Source:</Label>
                                <Input placeholder='Source' type='string' name='DebitsSource' value={editSource} onChange={(e) => setEditSource(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='Amount'>Edit Amount:</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder='Amount' type='decimal' min={0} name='DebitsAmount' value={editAmount} onChange={(e) => setEditAmount(e.target.value)}>
                                    </Input>
                                </InputGroup>
                            </FormGroup>
                            
                            <Modali.Button
                            label='Update'
                            isStyleDefault
                            onClick={() => updateDebit()} />
                            
                            <Modali.Button
                            label='Delete'
                            isStyleDestructive
                            onClick={() => deleteDebit()} />
                        </Form>
                    </ModalBody>
                </Modali.Modal>
            
            {/* <Modal
            isOpen={true}
            >
                <ModalHeader>Log a Debit</ModalHeader>
                <ModalBody>
                    <Form onSubmit={updateDebit}>
                        <FormGroup>
                            <Label htmlFor='DebitsDate'>Edit Date:</Label>
                            <Input type='date' name='DebitsDate' pattern='[0-9]{8}' value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='Source'>Edit Source:</Label>
                            <Input placeholder='Source' type='string' name='DebitsSource' value={editSource} onChange={(e) => setEditSource(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='Amount'>Edit Amount:</Label>
                            <InputGroup>
                                <InputGroupAddon addonType='prepend'>
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder='Amount' type='decimal' min={0} name='DebitsAmount' value={editAmount} onChange={(e) => setEditAmount(e.target.value)}>
                                </Input>
                            </InputGroup>
                        </FormGroup>
                        <Button color='warning' type='submit'>Update</Button>
                        <Button color='danger' onClick={() => {deleteDebit()}}>Delete</Button>
                    </Form>
                </ModalBody>
            </Modal> */}
        </>
    )
}

export default DebitUpdate;