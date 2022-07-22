import React, { useEffect, useState } from 'react';
import {Box, Heading, Text} from 'theme-ui';
import Calculator from '../components/Calculator/Calculator';

const calculator = ()=>{
    const styles = {
        smallBox: {
          color: "white",
          backgroundColor: "green",
          width: "7px",
          height: "7px",
        },
        smallLine: {
          color: "white",
          backgroundColor: "green",
          width: "40px",
          height: "1px",
          marginTop: "3px",
        },
        smallLine2: {
          color: "white",
          backgroundColor: "green",
          width: "40px",
          height: "1px",
          marginTop: "3px",
        },
        mainHeading: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          fontSize: "25px",
          color: "#002A4C",
          margin: "auto",
          marginBottom: "16px",
        },mainHeading2: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 800,
          fontSize: "28px",
          color: "#002A4C",
          margin: "auto",
          marginBottom: "16px",
        },
        mainHeadingBox: {
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "100%",
        },
        mainBox: {
          marginX: "40px",
          marginY: "40px",
          "@media (max-width:450px )": {
            marginX: "10px",
          },
        }}
        const [loaded,setloaded] = useState(false);
        useEffect(() => {
          setloaded(true);
        }, [loaded])
        
    return(
        <Box sx={styles.mainBox}>
      <Box sx={styles.mainHeadingBox}>
        <Heading sx={styles.mainHeading}>Measure Your Load And System Required</Heading>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}
      >
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox}>.</Box>
        <Box sx={styles.smallLine2}>.</Box>
      </Box>
      {loaded ? 
      <Text sx={{fontFamily:"Montserrat,sans-serif",fontSize:"20px"}}>Loading...</Text>
      :
        <Calculator/>
      }
</Box>
    )
}
export default calculator