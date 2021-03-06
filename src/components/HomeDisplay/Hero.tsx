import React from 'react'
import Image from 'react-bootstrap/Image'
import head from '../../Images/banner_head.webp'
import head2 from '../../Images/head2.webp'
import { Box, Heading, Text,Button } from 'theme-ui'
import './styles.css'
import { navigate } from 'gatsby'
const styles = {
  mainBox:{
  // marginTop:"-65px",
  backgroundImage:`url(${head})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  width:"100%",
  height:"590px"
},
    mainHeading:{
            fontSize:"60px",
            color:"#002A4C",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            fontFamily:'Montserrat, sans-serif',
            fontWeight:700,
            lineHeight:1.5,
            '@media (max-width:1150px ) and (min-width:761px )': {
                fontSize:"50px",
              },'@media (max-width:760px ) and (min-width:561px )': {
                fontSize:"45px",
              },'@media (max-width:560px ) and (min-width:431px )': {
                fontSize:"40px",
              },
              '@media (max-width:430px ) and (min-width:311px )': {
                fontSize:"30px",

              },
              '@media (max-width:310px ) and (min-width:250px )': {
                fontSize:"25px",
              },
              '@media (max-width:249px )': {
                fontSize:"23px",
              }
          
    },
    subBox:{
        marginTop:"200px",
        marginLeft:"50px",
        '@media (max-width:530px )': {
            marginLeft:"30px"
        },
    },
subHeading:{
    color:"#65af4e",
    fontFamily:'Montserrat, sans-serif',
    fontSize:"25px",
    fontWeight:600,
    width:"597px",
    '@media (max-width:1150px ) and (min-width:761px )': {
        fontSize:"23px",
        width:"570px"
      },'@media (max-width:760px ) and (min-width:561px )': {
        fontSize:"21px",
        width:"540px"
      },'@media (max-width:560px ) and (min-width:431px )': {
        fontSize:"19px",
        width:"400px"
      },
      '@media (max-width:430px ) and (min-width:311px )': {
        fontSize:"17px",
        width:"270px"
      },
      '@media (max-width:310px )': {
        fontSize:"15px",
        width:"90%"
      }
},
callBox:{
    fontWeight: 600,
    fontSize: "25px",
    fontFamily:'Montserrat, sans-serif',
    color: "#002A4C",
    lineHeight:1.5,
    '@media (max-width:1150px ) and (min-width:761px )': {
        fontSize:"23px",
      },'@media (max-width:760px ) and (min-width:561px )': {
        fontSize:"21px",
      },'@media (max-width:560px ) and (min-width:431px )': {
        fontSize:"19px",
        width:"300px"
      },
      '@media (max-width:430px ) and (min-width:311px )': {
        fontSize:"17px",
        width:"270px"
      },
      '@media (max-width:310px )': {
        fontSize:"15px",
        width:"90%"
      }
},
buttonVariant:{
  background:"linear-gradient(90deg, #5aa236, #a6dc6d 51%, #5aa236) var(--x, 0)/ 200%",
  marginTop:"40px",
    borderRadius:"30px",
    height:"50px",
    fontSize:"18px",
    width:"170px",
    cursor:"pointer",
    transition: "0.3s",
    "&:hover":{
        color:"#002A4C",
        background:"transparent",
        border:"2px solid #002A4C"
      },
    "&:active":{
        color:"#002A4C",
        background:"transparent",
        border:"2px solid #002A4C"
    },
     '@media (min-width:1150px )': {
        borderRadius:"30px",
        height:"50px",
        width:"200px",
        fontSize:"20px"
      },
    '@media (max-width:310px )': {
        width:"80%"
      }
},
headingSeperator:{
    marginTop:"30px"
}
}
const Hero = () => {
  return (
   <Box sx={styles.mainBox}>
.<Box sx={styles.subBox}>
<Box>
<Heading sx={styles.mainHeading}>
Solar Installations
</Heading>
<Heading sx={styles.subHeading}>
Experience The Power Of The Sun At Its Finest
</Heading>
</Box>
<Box sx={styles.headingSeperator}>
    <Text style={{fontStyle:"italic"}}>Just Reach For Your Phone</Text>
    <Heading sx={styles.callBox}>
    Call Me On +92 344 8884 086, 304 5665 065
    </Heading>
</Box>
<Box>
    <Button variant='secondary' sx={styles.buttonVariant} onClick={()=>{navigate("tel:+923448884086")}}>Contact Now</Button>
</Box>
</Box>
   </Box>
  )
}

export default Hero