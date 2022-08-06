// import React from 'react'
// import { Box, Button, Heading } from 'theme-ui'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import bg from '../../Images/bg.webp';
// import { navigate } from 'gatsby';
// const styles = {
//     mainBox:{
//         border:"2px solid #002A4C",
//         width:"370px", 
//         height:"600px",
//         borderRadius:"5px",
//         display:"flex",
//         flexDirection:"column",
//         justifyContent:"center",
//         margin:"30px auto",
//         "@media (max-width:1200px)":{
//             width:"70%"
//         },
//         "@media (max-width:550px)":{
//             width:"90%"
//         },
//         "@media (max-width:420px)":{
//             width:"95%"
//         },
//         "&:hover":{
//             backgroundColor:"rgba(170,170,170,0.2)"
//         }
//     }, mainBox2:{
//         border:"2px solid #002A4C",
//         width:"370px", 
//         height:"600px",
//         borderRadius:"5px",
//         display:"flex",
//         flexDirection:"column",
//         justifyContent:"center",
//         margin:"30px auto",
//         transition:"background-color 0.5s ease",
//         "@media (max-width:550px)":{
//             width:"90%"
//         },
//         "@media (max-width:420px)":{
//             width:"95%"
//         },
//         "&:hover":{
//             backgroundColor:"rgba(120,120,120,0.2)"
//         }
//     },
//     mainHeading:{
//         fontSize:"30px",
//         fontFamily:"MontSerrat,sans-serif",
//         color:"#002A4C",
//         margin:"auto",
//         fontWeight:700
//     },
//     PriceHeading:{
//         fontSize:"40px",
//         margin:"auto",
//         fontFamily:"MontSerrat,sans-serif",
//         color:"#002A4C",
//         fontWeight:800
//     },
//     benifitsHeading:{
//         fontSize:"30px",
//         margin:"auto",
//         fontFamily:"MontSerrat,sans-serif",
//         color:"#002A4C"
//     },
//     benifits:{
//         fontSize:"20px",
//         margin:"auto",
//         fontFamily:"MontSerrat,sans-serif",
//         color:"#002A4C"
//     },
//     buttonStyle:{
//     backgroundColor:"#6abd45",
//     borderRadius:"50px",
//     margin:"auto",
//     width:"90%",
//     fontSize:"18px",
//     fontFamily:"MontSerrat,sans-serif",
//     transition:"0.5s",
//     "&:hover":{
//         color:"#002A4C",
//         backgroundColor:"transparent",
//         border:"1px solid #002A4C"
//     },
//     "&:active":{
//         color:"#002A4C",
//         backgroundColor:"transparent",
//         border:"2px solid #002A4C"
//     }
// },
// iconStyle:{
// color:"#6abd45",
// marginRight:"10px"
// },
// listItemBox:{
// display:"flex",
// marginY:"20px"
// }
// }
// const PackageCards = ({mainHeading,Price,benifits,MP}) => {
//   return (
//     <Box sx={MP ? styles.mainBox : styles.mainBox2}>
// <Heading sx={styles.mainHeading}>
// {mainHeading}
// </Heading>
// <Heading sx={styles.PriceHeading}>
// <span style={{fontSize:"20px"}}>Rs.</span>{Price}
// </Heading>
// <Heading sx={styles.benifitsHeading}>
// Benifits
// </Heading>
// <Box sx={styles.benifits}>
// <ul style={{listStyleType: "none"}}>
//   {benifits.map((benifit,i)=>
//   <Box key={i} sx={styles.listItemBox}><CheckCircleIcon sx={styles.iconStyle}/>  <li>{benifit}</li></Box>
// )}
//  </ul>
// </Box>
// <Button sx={styles.buttonStyle} onClick={()=>{navigate("/packages_details")}}>
//     Explore More
// </Button>

//     </Box>
//   )
// }

// export default PackageCards


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { navigate } from 'gatsby';


export default function ActionAreaCard({mainHeading,image,location,details,link}) {
  return (
    <Card sx={{margin:"24px auto",maxWidth: 365,"@media (max-width:690px)": {maxWidth: 600} }} onClick={()=>{navigate(link)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{color:"#002a4c",fontWeight:"bold"}} variant="h5" component="div">
            {mainHeading} <Typography variant="span" sx={{fontSize:"16px",fontWeight:"normal"}}>from <span style={{fontSize:"19px",color:"green",fontWeight:600,fontFamily:"Montserrat,sans-serif"}}>{location}</span></Typography>
          </Typography>
          <Typography gutterBottom variant="body2" sx={{color:"rgba(106,189,69,1)",fontFamily:"Montserrat,sans-serif"}} >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}