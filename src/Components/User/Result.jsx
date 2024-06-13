import React from 'react'
import {Typography, Stack, Container, Paper} from "@mui/material"
const Result = ({theme = "light"}) => {
  return (
    <Stack sx={{
        direction: "vertical",
        display:{
            xs:"auto",
            md:"block"
        },
        height: "100vh",
        backgroundColor: theme === "dark"? "#121212" : "#f6f6f6",
        color: theme === "dark"? "#f6f6f6" : "black",
    }}>
        <Container >
          <Paper elevation={3}>
            <Typography variant="h5" align="center" bgcolor={"#121212"} >
              Result And Certificates
            </Typography>
          </Paper>
          <Stack>
            {/* Certificates IMages */}
          </Stack>
          <Stack>
            {/* Result Score chart*/}
          </Stack>
        </Container>
    </Stack>
  )
}

export default Result
