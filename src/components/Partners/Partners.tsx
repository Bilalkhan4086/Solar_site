import React from 'react'
import { Box, Heading } from 'theme-ui'

const styles={
    smallBox:{
        color:"white",
        backgroundColor:"green",
        width:"7px",
        height:"7px"
    },
    smallLine:{
        color:"white",
        backgroundColor:"green",
        width:"40px",
        height:"1px",
        marginTop:"3px"
    },
    smallLine2:{
        color:"white",
        backgroundColor:"green",
        width:"40px",
        height:"1px",
        marginTop:"3px"
    },
    mainHeading:{
        fontFamily:"Montserrat, sans-serif",
        fontWeight:550,
        fontSize:"25px",
        color:"#002A4C",
        margin:"auto",
        marginBottom:"16px"
    },
    mainBox:{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        width:"100%"
    },
    subHeading:{
        fontFamily:"Montserrat, sans-serif",
        fontWeight:600,
        textAlign:"center",
        fontSize:"40px",
        color:"#002A4C",
        margin:"auto",
        marginBottom:"16px",
        '@media (max-width:1150px ) and (min-width:900px )': {
            fontSize:"50px"
              },
              '@media (max-width:899px ) and (min-width:700px )': {
                fontSize:"40px"
                  },
                  '@media (max-width:699px ) and (min-width:550px )': {
                    fontSize:"35px"
                      },
              '@media (max-width:549px ) and (min-width:300px )': {
                fontSize:"30px"
                  },
                  '@media (max-width:299px )': {
                    fontSize:"25px"
                      }
    }
}

const Partners = () => {
  return (
    <Box>
        <Box sx={styles.mainBox}>
            <Heading sx={styles.mainHeading}>
                Our Clients
            </Heading>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
            <Box sx={styles.smallLine}>.</Box>
            <Box sx={styles.smallBox} >.</Box>
            <Box sx={styles.smallLine2}>.</Box>
        </Box>
        <Heading sx={styles.subHeading}>
            OUR PARTNERS
            </Heading>
    </Box>
  )
}

export default Partners