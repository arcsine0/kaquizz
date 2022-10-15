import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'

export const WinnersTable = (props) => {
  const data = props.data

  data.sort((a, b) => b[1] - a[1])
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
        {data.map((e, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{e[0]}</td>
              <td>{e[1]}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
