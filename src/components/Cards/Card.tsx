import React from 'react'
import { Box, Heading, Image } from 'theme-ui'
import bgI from '../../Images/card-back.jpg'
const styles={
    iconImage:{
width:"100px",
height:"102px"
    },
    CardHeading:{
        fontFamily:"Montserrat, sans-serif",
        fontSize:"18px",
        margin:"auto",
    },
    
    CardBox:{
        width:"300px",
        height:"280px",
        borderRadius:"5px",
        padding:"20px",
        color:"#002A4C",
        backgroundImage:`url(${bgI})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        fontFamily:"Montserrat, sans-serif",
        display:"flex",
        margin:"20px",
        marginLeft:"10px",
        flexDirection:"column",
        borderBottom: '3px solid #549a3e',
          transition:"0.3s",
          '@media screen and (min-width:1151px )': {
            '&:hover': {
                marginTop:"-10px"
              }   
              },
          '@media (max-width:1340px ) and (min-width:1178px )': {
            width:"550px",
            height:"300px",
            padding:"20px"
              },
              '@media (max-width:1177px ) and (min-width:820px)': {
                width:"40%",
                height:"300px",
                padding:"20px"
                  },
                  '@media (max-width:819px ) and (min-width:350px )': {
                    width:"80%",
                    height:"300px",
                    padding:"20px"
                      },
                      '@media (max-width:349px)': {
                        width:"95%",
                        height:"300px",
                        padding:"20px"
                          }}
}

const Card = ({icon,heading,description}) => {
  return (
        <Box sx={styles.CardBox}>
        <Image src={icon} sx={{width:"100px",height:"102px",marginX:"auto"}} alt="no Loaded"/>
        <Heading sx={styles.CardHeading}>{heading}</Heading>
        <Heading sx={{margin:"auto",fontWeight:400,fontSize:"17px",fontFamily:"Montserrat, sans-serif",justifyContent:"center",textAlign:"center"}}>{description}</Heading>
        </Box>
  )
}

export default Card