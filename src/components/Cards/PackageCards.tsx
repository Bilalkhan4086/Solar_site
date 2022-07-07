import React from 'react'
import { Box, Button, Heading } from 'theme-ui'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import bg from '../../Images/bg.webp';
const styles = {
    mainBox:{
        border:"2px solid #002A4C",
        width:"400px", 
        height:"600px",
        borderRadius:"5px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        backgroundImage:`url(${bg})`,
        margin:"30px auto",
        "@media (max-width:1200px)":{
            width:"70%"
        },
        "@media (max-width:550px)":{
            width:"90%"
        },
        "@media (max-width:420px)":{
            width:"95%"
        }
    },
    mainHeading:{
        fontSize:"30px",
        fontFamily:"MontSerrat,sans-serif",
        color:"#002A4C",
        margin:"auto",
        fontWeight:700
    },
    PriceHeading:{
        fontSize:"40px",
        margin:"auto",
        fontFamily:"MontSerrat,sans-serif",
        color:"#002A4C",
        fontWeight:800
    },
    benifitsHeading:{
        fontSize:"30px",
        margin:"auto",
        fontFamily:"MontSerrat,sans-serif",
        color:"#002A4C"
    },
    benifits:{
        fontSize:"20px",
        margin:"auto",
        fontFamily:"MontSerrat,sans-serif",
        color:"#002A4C"
    },
    buttonStyle:{
    backgroundColor:"#6abd45",
    borderRadius:"50px",
    margin:"auto",
    width:"90%",
    fontSize:"18px",
    fontFamily:"MontSerrat,sans-serif"
},
iconStyle:{
color:"#6abd45",
marginRight:"10px"
},
listItemBox:{
display:"flex",
marginY:"20px"
}
}
const PackageCards = ({mainHeading,Price,benifits}) => {
  return (
    <Box sx={styles.mainBox}>
<Heading sx={styles.mainHeading}>
{mainHeading}
</Heading>
<Heading sx={styles.PriceHeading}>
<span style={{fontSize:"20px"}}>Rs.</span>{Price}
</Heading>
<Heading sx={styles.benifitsHeading}>
Benifits
</Heading>
<Box sx={styles.benifits}>
<ul style={{listStyleType: "none"}}>
  {benifits.map((benifit,i)=>
  <Box key={i} sx={styles.listItemBox}><CheckCircleIcon sx={styles.iconStyle}/>  <li>{benifit}</li></Box>
)}
 </ul>
</Box>
<Button sx={styles.buttonStyle}>
    Explore More
</Button>

    </Box>
  )
}

export default PackageCards