import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';

const CreditsAmounts = (props) => {
    // console.log(props)

    // const [creditTotal, setCreditTotal] = useState('')

    let totalCredits = props.credits.reduce((a, cV) => {
        return a + parseFloat(cV.expenseAmount)
    }, 0)

    // console.log(totalCredits)

    // let copy = []

    // setCreditTotal(totalCredits)
    
    // useEffect(() => {
    //     setCreditTotal(totalCredits)
    // }, )
    
    // console.log(creditTotal)

    useEffect(() => {
        props.setCreditsAmount(totalCredits)
    }, )



    // const updateTotal = () => {
    //     setCreditTotal()
    // }

    // console.log(props.setCreditsAmount)

    // console.log(copy)


    return(
        <>
            {/* {
                props.credits ? props.credits.forEach(credit => {
                    // console.log(credit);
                    copy.push({
                        expenseAmount: credit.expenseAmount
                    })
                }) : null
            } */}
        </>
    )

}

export default CreditsAmounts