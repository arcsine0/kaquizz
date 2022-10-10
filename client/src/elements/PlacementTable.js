import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'

export const PlacementTable = (props) => {
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
        
      </tbody>
    </Table>
  )
}
