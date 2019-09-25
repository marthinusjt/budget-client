import React from 'react';
import { 
    Button,
    Table
} from 'reactstrap'

const CreditsTable = (props) => {
    // console.log(props)

    const creditMapper = () => {
        return props.credits.sort((a, b) => {
            if(a.expenseDate > b.expenseDate){
                return 1
            } else {
                return -1
            }}).map((credit, index) => {
                // console.log(credit)
            return(
                <tr key={index}>
                    <td>{credit.expenseDate}</td>
                    <td>{credit.expenseName}</td>
                    <td>{parseFloat(credit.expenseAmount).toFixed(2)}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateCredit(credit); props.updateOn(); props.toggleUpdateModal() }}>Update</Button>
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
                        <th>Name</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {creditMapper()}
                </tbody>
            </Table>
        </>
    )
}

export default CreditsTable