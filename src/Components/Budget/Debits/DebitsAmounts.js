import React, { useState, useEffect } from 'react';

const DebitsAmounts = (props) => {
    console.log(props)

    // const [debitTotal, setDebitTotal] = useState('')

    let totalDebits = props.debits.reduce((a, cV) => {
        return a + parseFloat(cV.incomeAmount)
    }, 0)

    // console.log(totalDebits)

    // // let copy = []

    // // setDebitTotal(totalDebits)
    
    // useEffect(() => {
    //     setDebitTotal(totalDebits)
    // }, )
    
    // console.log(debitTotal)

    useEffect(() => {
        props.setDebitsAmount(totalDebits)
    }, )



    // const updateTotal = () => {
    //     setCreditTotal()
    // }

    // console.log(props.setDebitsAmount)

    // console.log(copy)


    return(
        <>
            {/* {
                props.Debits ? props.Debits.forEach(credit => {
                    // console.log(credit);
                    copy.push({
                        expenseAmount: credit.expenseAmount
                    })
                }) : null
            } */}
        </>
    )

}

export default DebitsAmounts