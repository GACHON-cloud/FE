import React from "react";
import { Grid, Box } from "@mui/material"

export default function Guide(){
  return(
     <Box paddingTop="200px" paddingBottom="150px" style={{ backgroundColor:'#F5F7FB' }}>
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid item width="100%">
      <img src="/images/guide.png" width="80%" alt="" />
      </Grid>
      
    </Grid>
     </Box>
  )

}