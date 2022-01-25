import { useState, useEffect } from 'react'
import { useQuery, gql } from "@apollo/client"
import { ReportTable } from '../ReportTable'
import { Typography, Container, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { DeletePokemonForm } from '../DeletePokemonForm'

const GET_REPORTS = gql`
query {
    seeReports {
        pokemonReported
        reportDescription
        id
    }
}`

export const AdminPage = ({ secretKey }) => {

    const [errorMessage, setErrorMessage] = useState('')

    const { loading, data, error } = useQuery(GET_REPORTS, {
        context: { headers: { authorization: secretKey } },
        fetchPolicy: "no-cache"
    })

    const navigate = useNavigate()

    const AlertMessage = () => {
        if (errorMessage) {
            return (
                <Alert severity="error">{errorMessage}</Alert>
            )
        }
        return (
            <></>
        )
    }

    useEffect(() => {
        if (error || !secretKey) {
            navigate('/')
        }
    }, );



    if (loading) {
        return (
            <p>loading</p>
        )
    }

    return (
        <>
            <AlertMessage />
            <Container>
                <Typography variant="h2">Reports</Typography>
                <ReportTable reportData={data.seeReports} secretKey={secretKey} setErrorMessage={setErrorMessage} />
                <br />
                <br />
                <DeletePokemonForm secretKey={secretKey} setErrorMessage={setErrorMessage} />
            </Container>

        </>
    )

}