import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
     <Box sx={{
      my:15,
     textAlign:'center',
     p:2,
     "& h4" : {
      fontWeight: 'bold',
      my:2,
      fontSize:'2rem'
     },
     "& p":{
      textAlign:'justify'
     },
     '@media (max-width:600px)':{
      mt:0,
      "& h4":{
        fontSize: '1.5rem',
      }
     }
     }}>
       <Typography variant='h4'>
        Welcome To My Resturant
       </Typography>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis nostrum asperiores commodi aliquid pariatur earum, consequuntur, soluta modi quia vero, id sed quis ducimus ad alias at quisquam deleniti dolorum nisi natus voluptas aperiam magni blanditiis. Est cumque aspernatur ipsa, necessitatibus sit doloribus recusandae laudantium voluptatem labore minus repellat impedit aut commodi suscipit ut dolores nostrum, voluptatum, itaque nulla id quos ipsum repellendus. Recusandae, pariatur saepe. Id illo natus odit at dolorum dolores, error quo asperiores obcaecati! Soluta consectetur error, officia perferendis facere facilis quo mollitia? Provident error minima repellat eveniet, ab aliquid pariatur! Hic vitae minima cum voluptas.
       </p>
       <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque magni consequatur dolores beatae voluptatem sequi nisi, accusamus quia quis animi earum modi ipsa, perspiciatis saepe. Dolorem, exercitationem, soluta quae omnis a numquam eligendi molestias voluptas officia incidunt sapiente neque! Voluptatum quaerat totam maiores doloribus cumque dolores mollitia officia molestias soluta. Enim eum dolores architecto modi non placeat asperiores atque iste. Beatae possimus fugit, voluptates fugiat ratione veniam tempore earum doloremque adipisci tempora voluptatem rem nobis consequuntur debitis accusamus et delectus, impedit soluta facilis. Iusto similique, quis fugit eligendi adipisci odit aliquid assumenda accusantium. Dolorem in eligendi nulla nobis architecto.</p>
     </Box>
    </Layout>
  )
}

export default About
