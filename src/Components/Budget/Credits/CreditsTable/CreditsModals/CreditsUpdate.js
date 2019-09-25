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

// const baseURL = `http://localhost:3020/credits`
const baseURL = `https://mjtbudgetserver.herokuapp.com/credits`

const CreditsUpdate = (props) => {
    console.log(props)

    const [editDate, setEditDate] = useState(props.creditToUpdate.expenseDate);
    const [editName, setEditName] = useState(props.creditToUpdate.expenseName);
    const [editAmount, setEditAmount] = useState(props.creditToUpdate.expenseAmount);


    const deleteCredit = (e) => {
        // e.preventDefault();

        let url = `${baseURL}/delete/${props.creditToUpdate.id}`
        // console.log(url)

        fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.toggleUpdateModal();
            props.fetchCredits();
            props.updateOff();
            // props.refreshPage();
        })
    }

    const updateCredit = (e) => {
        // e.preventDefault();

        let url = `${baseURL}/update/${props.creditToUpdate.id}`
        // console.log(url);

        fetch(url, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                credits: {
                    expenseDate: editDate,
                    expenseName: editName,
                    expenseAmount: editAmount
                }
            })
        })
        .then((res) => {
            props.toggleUpdateModal();
            props.fetchCredits();
            props.updateOff();
            // props.refreshPage();
        })
        // .then((data) => {
        //     console.log(data)
        //     props.toggleUpdateModal();
        // })

    }

    return(
        <>
            <Modali.Modal {...props.updateModal}>
                <div style={{textAlign: 'center'}}>
                    <h3>Update</h3>
                </div>
                    <ModalBody>
                        <Form onSubmit={updateCredit}>
                            <FormGroup>
                                <Label htmlFor='CreditsDate'>Edit Date:</Label>
                                <Input type='date' name='CreditsDate' pattern='[0-9]{8}' value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='Name'>Edit Name:</Label>
                                <Input placeholder='Name' type='string' name='CreditsName' value={editName} onChange={(e) => setEditName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='Amount'>Edit Amount:</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder='Amount' type='decimal' min={0} name='CreditsAmount' value={editAmount} onChange={(e) => setEditAmount(e.target.value)}>
                                    </Input>
                                </InputGroup>
                            </FormGroup>
                            
                        <Modali.Button
                            label='Update'
                            isStyleDefault
                            onClick={() => updateCredit()} />
                            
                        <Modali.Button
                            label='Delete'
                            isStyleDestructive
                            onClick={() => deleteCredit()} />
                            
                        </Form>
                    </ModalBody>
            </Modali.Modal>
        </>
    )
}

export default CreditsUpdate;