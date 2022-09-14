import React from 'react'
import { Table } from 'react-bootstrap'

const CustomTable = ({ tableHead = [], tableData = [] }) => {
    return (
        <Table striped hover bordered >
            <thead>
                <tr>
                    <th>#</th>
                    {
                        tableHead.map((head, i) => <th key={i}>{head}</th>)
                    }
                </tr>
                
            </thead>
            <tbody>
                {
                    tableData.map((data, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            {Object.keys(data).map((key, j) => (
                                <td>
                                    {data[key]}
                                </td>
                            ))
                            }

                        </tr>
                    ))
                }

            </tbody>
        </Table>
    )
}

export default CustomTable