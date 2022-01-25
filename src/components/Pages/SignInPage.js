import { useLazyQuery, gql } from '@apollo/client';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LOGIN = gql`
query {
    login
  }
`

export const SignInPage = ({ secretKey, setSecretKey }) => {


    const navigate = useNavigate()

    const [login] = useLazyQuery(LOGIN, {
        context: { headers: { authorization: secretKey } },
        fetchPolicy: "no-cache"
    })



    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await login()
        if (res.data.login === true) {
            navigate('/admin')
        }
    }

    const handleChange = (event) => {
        setSecretKey(event.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label="Enter Admin Key"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '40ch' }}
                        onChange={handleChange}
                        value={secretKey}
                    />
                </div>
                <Button type='submit'>Login</Button>
            </form>
        </>
    )

}