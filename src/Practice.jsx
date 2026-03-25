import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

import Button from '@mui/material/Button';
export default function Practice(){
     function handleClickMe(){
    console.log("CLIKED ME")
  }
 

  return (
    <>
    <h1>HELOO........</h1>
    <Button variant="contained"onClick={handleClickMe} color='error'  startIcon={<DeleteIcon />}>Delete  me!!</Button>
    &nbsp;&nbsp;&nbsp;
    <Button variant='contained' endIcon={<SendIcon />}>SEND me</Button>
    <Alert  severity="warning">This is Danger Page</Alert>
     
    </>
  )
}