import React from 'react'
import {navigate} from 'gatsby'
import { Box, Heading } from 'theme-ui'
import FontAwesome from "react-fontawesome"
import faStyles from 'font-awesome/css/font-awesome.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsApp from "@mui/icons-material/WhatsApp";
import Twitter from '@mui/icons-material/Twitter';
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";

import "./index.css"
import { Google } from '@mui/icons-material'
const styles ={
    mainBox:{

    },
    smallestBox:{
        width:"90%",
        height:"100px",
        background:"linear-gradient(to right, #002a4c, #6abd45)",
        transform:"skew(360deg,2deg)",
        marginBottom:"-30px",
        marginX:"auto",
        borderRadius:"5px",
        zIndex:"-1"

    },
    medBox:{
        width:"90%",
        height:"450px",
        background:"linear-gradient(to right, #002a4c, #6abd45)",
        marginX:"auto",
        boxShadow:"0 10px 10px 0px #0000001f",
        color:"white",
        padding:"0px 40px 40px 40px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        '@media (max-width : 970px)':{
        height:"850px",
        },
        '@media (max-width : 340px)':{
            height:"1050px",
            } 

    },
    largeBox:{
        width:"100%",
        paddingTop:"370px",
        paddingBottom:"15px",
        paddingX:"15px",
        color:"white",
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        background:"linear-gradient(to right, #002a4c, #6abd45)",
        '@media (max-width : 970px)':{
            paddingTop:"770px",
        }  ,
        '@media (max-width : 340px)':{
            paddingTop:"970px",
            } 
   
    },
    contentBox:{
        display:"flex",
        flexDirection:"column",
        marginX:"auto",
        marginBottom:"-350px",
        '@media (max-width : 970px)':{
            marginBottom:"-750px",
            } ,
            '@media (max-width : 340px)':{
                marginBottom:"-950px",
                } 
    },
    summary:{
        width:"350px",
        fontFamily:"MontSerrat,sans-serif",
        fontSize:"17px",
        '@media (max-width : 970px)':{
            width:"80%",
            marginX:"auto"
            } 
    },
    iconContainer:{
        backgroundColor:"white",
        width:"45px",
        height:"45px",
        cursor:"pointer",
        borderRadius:"30px",
        marginX:"8px",
        display:"flex",
        color:"#04610d",
        "&:hover":{
            color:"white",
            backgroundColor:"transparent",
            border:"1px solid white"
        }
    },
    leftBox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        '@media (max-width : 970px)':{
        marginX:"auto",
        } 
    },
    RightBox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        '@media (max-width : 970px)':{
            width:"80%",
            marginX:"auto",
            },
            '@media (max-width : 700px)':{
                width:"90%",
                marginX:"auto",
                } ,
                '@media (max-width : 400px)':{
                    width:"100%",
                    marginX:"auto",
                    } ,
                    '@media (max-width : 500px)':{
                        float:"left",
                        } 
                        
    },
    RightHeading:{
        fontSize:"35px",
        fontFamily:"Montserrat,sans-serif",
        '@media (max-width : 970px)':{
            width:"80%",
            } ,
            '@media (max-width : 340px)':{
                fontSize:"20px",
                width:"90%"
                } 
                // ,
                // '@media (max-width : 400px)':{
                //     fontSize:"25px"
                //     } 
    },
    LocationAndContact:{
        fontSize:"16px",
        fontFamily:"Montserrat,sans-serif",
        '@media (max-width : 350px)':{
            fontSize:"10px",
            }
    },
    smallCallHeading:{
        fontSize:"25px",
        fontFamily:"Montserrat,sans-serif", 
        '@media (max-width : 340px)':{
            fontSize:"18px",
            } 
    },
    NumberHeading:{
        fontSize:"40px",
        fontFamily:"Montserrat,sans-serif", 
        '@media (max-width : 590px)':{
            fontSize:"35px",
            } , 
            '@media (max-width : 540px)':{
                fontSize:"30px",
                } , 
                '@media (max-width : 450px)':{
                    fontSize:"20px",
                    } , 
                    '@media (max-width : 340px)':{
                        fontSize:"13px",
                        } 
    },
    contactDetails:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    callBox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"   
    },
    iconBox:{
        width:"350px",
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap",
        '@media (max-width : 970px)':{
            marginX:"auto",
            } ,
            '@media (max-width : 500px)':{
                width:"240px",
                marginX:"auto",
                } ,
                '@media (max-width : 320px)':{
                    width:"150px",
                    marginX:"auto"
                    
                    } 
        }
            
}
const ContactUs = () => { 
const links = [{name:"whatsapp",link:"/#"},{name:"google",link:"/#"},{name:"twitter",link:"/#"},{name:"facebook",link:"/#"},{name:"instagram",link:"/#"}]
    return (
    <Box>
        <Box sx={styles.contentBox}>
        <Box sx={styles.smallestBox}>.</Box>
        <Box sx={styles.medBox}>
            {/* Left Box */}
        <Box sx={styles.leftBox}>
{/* LOGO */}
<Box sx={{fontSize:"24px"}}>
            <span style={{fontWeight:450}}>SOL</span><span style={{fontStyle:"Italic",fontWeight:500}}>ARIC</span>
            </Box>
{/* Summary */}
<Box sx={styles.summary}>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
</Box>
{/* list */}
<Box sx={styles.iconBox}>

{/* {
    links.map((link)=>( */}
        <Box sx={styles.iconContainer} onClick={()=>{navigate("/#")}}>  <WhatsApp style={{margin:"auto",fontSize:"25px"}} /></Box>
        <Box sx={styles.iconContainer} onClick={()=>{navigate("/#")}}><Twitter style={{margin:"auto",fontSize:"25px"}} /></Box>
        <Box sx={styles.iconContainer} onClick={()=>{navigate("/#")}}><Instagram style={{margin:"auto",fontSize:"25px"}} /></Box>
        <Box sx={styles.iconContainer} onClick={()=>{navigate("/#")}}><Facebook style={{margin:"auto",fontSize:"25px"}} /></Box>
        <Box sx={styles.iconContainer} onClick={()=>{navigate("/#")}}> <Google style={{margin:"auto",fontSize:"25px"}} /></Box>





</Box>
        </Box>
        
        {/* RightBox */}
        
        <Box sx={styles.RightBox}>
            <Heading sx={styles.RightHeading}>
                Contact Us
            </Heading>
            {/* <Box sx={styles.contactDetails}> */}
            
            <Heading sx={styles.LocationAndContact}>
                <span  className='iconMargin'><LocationOnIcon  className="iconStyles2"/></span>Wapda Mangla Colony, Wapda office, Pakistan
            </Heading>
            <Heading sx={styles.LocationAndContact}>
            <span  className='iconMargin'><PublicIcon  className="iconStyles2"/></span>www.NetMetering.com
            </Heading>
            <Heading sx={styles.LocationAndContact}>
            <span  className='iconMargin'><EmailIcon  className="iconStyles2"/></span>WebDeveloper.Bilal@gmail.com
            </Heading>
            
<Box sx={styles.callBox}>
    <Heading sx={styles.smallCallHeading}>
        Call Now
    </Heading>
    <Heading sx={styles.NumberHeading}>
       <span className='iconMargin'><LocalPhoneIcon className="iconStyles"/></span> 92 304 5665065
        </Heading>
{/* </Box> */}

            </Box>
        </Box>
        
        
        </Box>
        </Box>
        <Box sx={styles.largeBox}>
        Copyright © 2021 Solar Installations. All Rights Reserved
        </Box>
    </Box>
  )
}

export default ContactUs
