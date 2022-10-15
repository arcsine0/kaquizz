import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'

export const WinnersTable = (props) => {
    const data = props.data
    console.log(data)

  return (

    <Table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr className='currentPlayer'>
          <td>1st</td>
          <td>Player 1</td>
          <td>200</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Player 2</td>
          <td>300</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Player 2</td>
          <td>300</td>
        </tr>
      </tbody>
    </Table>
  )
}
