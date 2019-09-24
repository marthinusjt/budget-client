import React, { useState, useEffect } from 'react';

const Income = (props) => {
    console.log(props)

    const [credits, setCredits] = useState([]);
    const [debits, setDebits] = useState([]);

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

    useEffect(() => {
        fetchCredits()
    }, [])

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

    useEffect(() => {
        fetchDebits()
    }, [])

    console.log(debits)
    console.log(credits)
    
    let totalCredits = credits.reduce((a, cV) => {
            return a + parseFloat(cV.expenseAmount)
        }, 0)

    let totalDebits = debits.reduce((a, cV) => {
            return a + parseFloat(cV.incomeAmount)
        }, 0)
    
    console.log(totalCredits)
    console.log(totalDebits)

    let netIncome = totalDebits - totalCredits

    console.log(netIncome)

    return(
        <>
            <h1>Net Income</h1>
            {
                netIncome >= 0 ? <h2 style={{color: 'green'}}>{netIncome.toFixed(2)}</h2> : <h2 style={{color: 'red'}}>{netIncome.toFixed(2)}</h2>
            }
        </>
    )
}

export default Income;