import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ReportModal = ({ name, report }) => {

  const [reportDescription, handleReportDescription] = useState('')

  const [reportSubmitted, setReportSubmitted] = useState(false)

  const handleChange = (event) => {
    handleReportDescription(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    setReportSubmitted(true)

    report({
      variables: {
        pokemonReported: name,
        reportDescription: reportDescription
      }
    })

  }


  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  if (reportSubmitted) {
    return (
      <Button disabled>Reported</Button>
    )
  }

  return (
    <div>

      <Button onClick={handleOpen}>Report</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography>Reason for Report: </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Report"
              value={reportDescription}
              onChange={handleChange}
              required
              multiline
              inputProps={{ maxLength: 150 }}
              sx={{ m: 1, width: '40ch' }}
            />

            <Button type='submit'>Report Pokemon</Button>
          </form>
        </Box>
      </Modal>

    </div>
  )
}