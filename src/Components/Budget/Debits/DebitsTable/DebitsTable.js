import React from 'react';
import { 
    Button,
    Table
} from 'reactstrap'

const DebitsTable = (props) => {
    // console.log(props)

    const debitMapper = () => {
        return props.debits.sort((a, b) => {
            if(a.incomeDate > b.incomeDate){
                return 1
            } else {
                return -1
            }}).map((debit, index) => {
            return(
                <tr key={index}>
                    <td>{debit.incomeDate}</td>
                    <td>{debit.incomeSource}</td>
                    <td>{parseFloat(debit.incomeAmount).toFixed(2)}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateDebit(debit); props.updateOn(); props.toggleUpdateModal() }}>Update</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Amout</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {debitMapper()}
                    
                    {/* {props.debits ? props.debits.sort((a, b) => {
                        if(a.incomeDate >= b.incomeDate){
                            return 1
                        } else {
                            return -1
                        }})
                        .map((debit, index) => {
                        return(
                            <tr key={index}>
                                <td>{debit.incomeDate}</td>
                                <td>{debit.incomeSource}</td>
                                <td>{debit.incomeAmount}</td>
                                <td>
                                    <Button color='warning' onClick={() => {props.editUpdateDebit(debit); props.updateOn()}}>Update</Button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    null} */}


                </tbody>
            </Table>
        </>
    )
}

export default DebitsTable