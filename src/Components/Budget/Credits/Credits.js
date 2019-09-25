import React, { useState, useEffect } from 'react';
import CreditsCreate from './CreditsTable/CreditsModals/CreditsCreate';
import CreditsTable from './CreditsTable/CreditsTable';
import CreditsUpdate from './CreditsTable/CreditsModals/CreditsUpdate';
import CreditsAmounts from './CreditsAmounts'
import Modali, { useModali } from 'modali'
import {
    Col,
} from 'reactstrap';

const Credits = (props) => {
    // console.log(props)
    
    const [credits, setCredits] = useState([]);
    const [createActive, setCreateActive] = useState(true);
    const [updateActive, setUpdateActive] = useState(false);
    const [creditToUpdate, setCreditToUpdate] = useState({});
    const [updateModal, toggleUpdateModal] = useModali();

    // console.log(credits)
    
    const fetchCredits = () => {

        let url = `http://localhost:3020/credits/all`

        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type' : 'application:json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(creditsData => {
            // console.log(creditsData)
            setCredits(creditsData)
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

    const editUpdateCredit = (credit) => {
        setCreditToUpdate(credit)
        // console.log(credit)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(() => {
        fetchCredits()
    }, [])
    
    return(
        <>
            {/* <Col>
                <CreditsCreate fetchCredits={fetchCredits} token={props.token} createOn={createOn} createOff={createOff} refreshPage={refreshPage} /> 
            </Col> */}
            <Col>
            {
                createActive ? <CreditsCreate fetchCredits={fetchCredits} token={props.token} createOn={createOn} createOff={createOff} refreshPage={refreshPage} /> : <></>
            }
            </Col>
            <hr />
            <CreditsTable credits={credits} editUpdateCredit={editUpdateCredit} updateOn={updateOn} toggleUpdateModal={toggleUpdateModal} />
            <hr />
            {
                updateActive ? <CreditsUpdate credits={credits} creditToUpdate={creditToUpdate} updateOff={updateOff} fetchCredits={fetchCredits} updateModal={updateModal} token={props.token} refreshPage={refreshPage} /> : <></>
            }
            {<CreditsAmounts credits={credits} setCreditsAmount={props.setCreditsAmount} />}
        </>
    )
}


export default Credits;