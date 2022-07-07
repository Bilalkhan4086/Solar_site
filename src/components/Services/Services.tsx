import React from 'react'
import { Box,Heading,Button } from 'theme-ui'
import Card from '../Cards/Card'
import icon1 from '../../Images/solar-icon1.webp'
import icon2 from '../../Images/solar-icon2.webp'
import icon3 from '../../Images/solar-icon3.webp'
import icon4 from '../../Images/solar-icon4.webp'
import { Fade } from 'react-reveal'

const styles={
    smallBox:{
        color:"red",
        backgroundColor:"green",
        width:"7px",
        height:"7px"
    },
    smallLine:{
        color:"red",
        backgroundColor:"green",
        width:"40px",
        height:"1px",
        marginTop:"3px"
    },
    smallLine2:{
        color:"red",
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
    },
    cardBox:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
    },
    buttonStyle:{
        background:"linear-gradient(90deg, #5aa236, #a6dc6d 51%, #5aa236) var(--x, 0)/ 200%",
        borderRadius:"30px",
        height:"50px",
        fontFamily:"Montserrat,sans-serif",
        fontSize:"16px",
        width:"150px",
        transition: "0.3s",
        cursor:"pointer",
        margin:"auto",
        marginY:"30px",
        '&:active': {
            background:"white",
            color:"#a6dc6d"
          },
        '@media (min-width:1150px )': {
            borderRadius:"30px",
            height:"50px",
            width:"170px",
            fontSize:"18px"
          },
          '@media (max-width:1149px) and (min-width:301px )': {
            borderRadius:"30px",
            height:"50px",
            width:"150px",
            fontSize:"16px"
          },
          '@media (max-width:449px) and (min-width:301px )': {
            width:"85%",
            marginX:"5%",
          },
        '@media (max-width:300px )': {
            width:"95%"
          }
    }
}
const Services = () => {
  return (
    <Box sx={styles.mainBox}>
        <Heading sx={styles.mainHeading}>
            Our Services
        </Heading>
        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox} >.</Box>
        <Box sx={styles.smallLine2}>.</Box>
        </Box>
            <Heading sx={styles.subHeading}>
            Solar Plans & Services
            </Heading>
            <Box sx={styles.cardBox}>
            <Card icon={icon1} heading={"Solar Panel Insatalltion"} description={"It is a long established fact that a reader will be distracted"}/>
            <Card icon={icon2} heading={"Assured Quality And Service"} description={"It is a long established fact that a reader will be distracted"}/>
            <Card icon={icon3} heading={"Best Component Selection"} description={"It is a long established fact that a reader will be distracted"}/>
            <Card icon={icon4} heading={"Solar Net-Mettering"} description={"It is a long established fact that a reader will be distracted"}/>
            </Box>
            <Button sx={styles.buttonStyle} >
                    Explore More
            </Button>
    </Box>
  )
}

export default Services