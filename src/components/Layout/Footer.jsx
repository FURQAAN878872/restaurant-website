import React from 'react'
import { Box, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:1}}>
        <Box sx={{ "& svg": {
            fontSize: '60px',
            cursor:"pointer",
            mr:2,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms'
        }
        }}>
        <LinkedInIcon/>
        <GitHubIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        </Box>
        <Typography 
        variant='h5' 
        sx={{"&media (max-width:600px)": {
            fontSize: "1rem"
        },
        }}>
            All Rights Reserved &copy;
        </Typography>
    </Box>
        </>
  )
}

export default Footer
