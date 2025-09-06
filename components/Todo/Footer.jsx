import React from 'react'
import { Box ,Container, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box
    
      sx={{
        bgcolor:"primary.main",
        color: "white",
        py:2,
        mt: 0,
        textAlign:"center",
        height:"10vh"

      }}
    
    >
        <Container>
            <Typography variant='body2'>
                My ToDo App. All rights reserved
            </Typography>
        </Container>

    </Box>
  )
}

export default Footer
