import React from 'react'
import Box from '@mui/material/Box'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';


export default  ()=> {
    return (
        <Box sx={{
            width:"100%",
            height:"30vh",
            mt:"10%",
            textAlign:"center",
            background:"black",
            color:"white"
        }}>
           <Typography variant='h1'>
                <FacebookIcon/> 
                <TwitterIcon/>
                <InstagramIcon/>
           </Typography>
           <Typography>
                Copyright © 2018 Workforce Studio . Design: templatemo
           </Typography>
        </Box>
    )
}


