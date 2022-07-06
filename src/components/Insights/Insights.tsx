import React from 'react'
import {navigate} from 'gatsby'
import { Box, Heading } from 'theme-ui'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsApp from "@mui/icons-material/WhatsApp";
import Twitter from '@mui/icons-material/Twitter';
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";

import { Google } from '@mui/icons-material'
import InsightInfoCard from '../Cards/InsightInfoCard';
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
        height:"300px",
        background:"linear-gradient(to right, #002a4c, #6abd45)",
        marginX:"auto",
        boxShadow:"0 10px 10px 0px #0000001f",
        color:"white",
        padding:"0px 40px 40px 40px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        '@media (max-width : 1228px)':{
        height:"500px",
        },
        '@media (max-width : 660px)':{
        height:"900px",
        },
        '@media (max-width : 370px)':{
        height:"1000px",
        }

    },
    largeBox:{
        width:"100%",
        paddingTop:"300px",
        paddingBottom:"15px",
        marginBottom:"40px",
        color:"green",
        display:"flex",
        zIndex:"-1",
        marginTop:"-300px",
        justifyContent:"center",
        textAlign:"center",
        background:"linear-gradient(to right, #002a4c, #6abd45)",
        '@media (max-width : 1228px)':{
            paddingTop:"500px",
            marginTop:"-500px",
        },
        '@media (max-width : 660px)':{
            paddingTop:"900px",
            marginTop:"-900px",
        },
        '@media (max-width : 375px)':{
            paddingTop:"1000px",
            marginTop:"-1000px",
        }
            } 
   
    ,
    contentBox:{
        display:"flex",
        flexDirection:"column",
        marginX:"auto",
        }     
}
const Insight = () => { 
const links = [{name:"whatsapp",link:"/#"},{name:"google",link:"/#"},{name:"twitter",link:"/#"},{name:"facebook",link:"/#"},{name:"instagram",link:"/#"}]
    return (
    <Box>
        <Box sx={styles.contentBox}>
        <Box sx={styles.smallestBox}>.</Box>
        <Box sx={styles.medBox}>
            
            <InsightInfoCard detail="Happy Customers" number={992}/>
            <InsightInfoCard detail="Project Complete" number={992}/>
            <InsightInfoCard detail="Installation Time" number={2}/>
            <InsightInfoCard detail="Sales" number={122}/>
        
        </Box>
        <Box sx={styles.largeBox}>
        .
        </Box>
        </Box>
    </Box>
  )
}

export default Insight
