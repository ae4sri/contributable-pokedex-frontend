import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { gql, useMutation } from '@apollo/client'

const DELETE_REPORT = gql`
mutation removeReport($id: ID!) {
  removeReport(id: $id)
}
`

const DELETE_POKEMON = gql`
mutation removePokemon($name: String!) {
  removePokemon(name: $name)
}
`

export const ReportTable = ({ reportData, secretKey, setErrorMessage }) => {

  console.log(secretKey)

  const [reports, setReports] = useState(reportData)

  const [removePokemon] = useMutation(DELETE_POKEMON, {
    context: { headers: { authorization: secretKey } }
  })

  const [removeReport] = useMutation(DELETE_REPORT, {
    context: { headers: { authorization: secretKey } },
    fetchPolicy: "no-cache"
  })

  const deleteReport = async (id) => {
    try {
      await removeReport({
        variables: {
          id: id
        }
      })
      setReports(reports.filter(r => r.id !== id))
    } catch (e) {
      setErrorMessage(e.message)
      setTimeout(function () {
        setErrorMessage('')
      }, 5000);
    }
  }

  const resolveReport = async (name) => {
    try {
      await removePokemon({
        variables: {
          name: name
        }
      })
      setReports(reports.filter(r => r.pokemonReported !== name))
    } catch (e) {
      setErrorMessage(e.message)
      setTimeout(function () {
        setErrorMessage('')
      }, 5000);
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell>Pokemon Reported</TableCell>
            <TableCell align="left" sx={{ width: 200 }}>Report Description</TableCell>
            <TableCell align="left">Report ID</TableCell>
            <TableCell align="left">Resolve</TableCell>
            <TableCell align="left">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell component="th" scope="row">
                {row.pokemonReported}
              </TableCell>
              <TableCell align="left" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{row.reportDescription}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell><Button type="submit" onClick={() => resolveReport(row.pokemonReported)}>Resolve Report (Remove Pokemon)</Button></TableCell>
              <TableCell><Button type='submit' onClick={() => deleteReport(row.id)}>Delete Report</Button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}