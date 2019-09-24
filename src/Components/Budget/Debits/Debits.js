import React, { useState, useEffect } from 'react';
import DebitsCreate from './DebitsTable/DebitsModals/DebitsCreate'
import DebitsTable from './DebitsTable/DebitsTable'
import DebitsUpdate from './DebitsTable/DebitsModals/DebitsUpdate'
import Modali, { useModali } from 'modali'
import {
    Col
} from 'reactstrap';

const Debits = (props) => {
    // console.log(props)
    
    const [debits, setDebits] = useState([]);
    const [createActive, setCreateActive] = useState(true);
    const [updateActive, setUpdateActive] = useState(false);
    const [debitToUpdate, setDebitToUpdate] = useState({});
    const [updateModal, toggleUpdateModal] = useModali();
    
    const fetchDebits = () => {

        let url = `http://localhost:3020/debits/all`

        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type' : 'application:json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(debitsData => {
            // console.log(debitsData)
            setDebits(debitsData)
        })
        .catch(err => console.error({ message: err }))
    }

    const refreshPage = () => {
        window.location.reload(false);
    }

    const createOn = () => {
        setCreateActive(true)
    }

    const createOff = () => {
        setCreateActive(false)
    }

    const editUpdateDebit = (debit) => {
        setDebitToUpdate(debit)
        // console.log(debit)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(() => {
        fetchDebits()
    }, [])
    
    return(
        <>
            <Col>
            {
                createActive ? <DebitsCreate fetchDebits={fetchDebits} token={props.token} createOn={createOn} createOff={createOff} refreshPage={refreshPage} /> : <></>
            }
            </Col>
            <hr />
            <DebitsTable debits={debits} editUpdateDebit={editUpdateDebit} updateOn={updateOn} toggleUpdateModal={toggleUpdateModal} />
            <hr />
            {
                updateActive ? <DebitsUpdate debits={debits} debitToUpdate={debitToUpdate} updateOff={updateOff} fetchDebits={fetchDebits} updateModal={updateModal} token={props.token} refreshPage={refreshPage} /> : <></>
            }
        </>
    )
}

export default Debits;