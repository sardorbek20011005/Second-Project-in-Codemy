import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default  ()=> {
    return (
        <Container maxWidth="lg">
            <Box sx={{ width: '100%', mt:"10%",
        textAlign:"center" }}>
                <Typography variant='h2'>
                    Contact
                </Typography>
                <Typography variant='h6'>
                    ____
                </Typography>
                <Typography variant='h6'>
                    Talk to us for more assistance...
                </Typography><br/><br/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={4} >
                    <Item sx={{boxShadow:"none"}}>
                        <TextField sx={{width:"100%"}}
                            id="demo-helper-text-misaligned"
                            label="Name"
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Item sx={{boxShadow:"none"}}>
                    <TextField sx={{width:"100%"}}
                        id="demo-helper-text-misaligned"
                        label="Email"
                    />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Item sx={{boxShadow:"none"}}>
                        <TextField sx={{width:"100%"}}
                                id="demo-helper-text-misaligned"
                                label="Subject"
                            />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Item sx={{boxShadow:"none"}}>
                    <TextField sx={{width:"100%"}}
                            id="demo-helper-text-misaligned"
                            />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Item sx={{boxShadow:"none"}}>
                        <Button variant='contained' sx={{width:"60%",border:"2px solid #55acee",background:"transparent",color:"black"}}>
                            Send Message
                        </Button>
                    </Item>
                </Grid>
            </Grid>
      </Box>
        </Container>
    )
}


