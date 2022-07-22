import React from "react"
import { Box, Button, Heading, Image, Text } from "theme-ui"
import Card from "../components/Cards/Card"
import icon1 from "../Images/solar-icon1.webp"
import icon2 from "../Images/solar-icon2.webp"
import icon3 from "../Images/solar-icon3.webp"
import icon4 from "../Images/solar-icon4.webp"
import { navigate } from "gatsby"
import heroImg from '../Images/Hybrid-Solar-System-in-Pakistan.webp'
import Slide from 'react-reveal/Slide';

interface secondHNTType{
  heading : String
  text : String
} 

interface detailPropsType {
  headingMain : String
  mainDesc : String
  mainImage : any
  secondHeading : String
  secondHNT : secondHNTType[]
  thirdHeading : String
  thirdSubHeading : String
  thirdSubsmallHeading : String
  thirdList : String[]
}

const services_details = ({headingMain,mainDesc,mainImage,secondHeading,secondHNT,thirdHeading,thirdSubHeading,thirdSubsmallHeading,thirdList}:detailPropsType) => {
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
    },
    subHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      textAlign: "center",
      fontSize: "40px",
      color: "#002A4C",
      margin: "auto",
      marginBottom: "16px",
      "@media (max-width:1150px ) and (min-width:900px )": {
        fontSize: "50px",
      },
      "@media (max-width:899px ) and (min-width:700px )": {
        fontSize: "40px",
      },
      "@media (max-width:699px ) and (min-width:550px )": {
        fontSize: "35px",
      },
      "@media (max-width:549px ) and (min-width:300px )": {
        fontSize: "30px",
      },
      "@media (max-width:299px )": {
        fontSize: "25px",
      },
    },
    imageStyles:{
        display:"flex",
        justifyContent:'center',
        margin:"20px auto"
    },
    buttonVariant:{
      background:"linear-gradient(90deg, #5aa236, #a6dc6d 51%, #5aa236) var(--x, 0)/ 200%",
      borderRadius:"30px",
      height:"40px",
      width:"200px",
      fontFamily:"Montserrat,sans-serif",
      fontSize:"14px",
      transition: "0.3s",
      cursor:"pointer",
      border:"1px solid #5aa236",
      "&:hover":{
          color:"#002A4C",
          background:"transparent",
          border:"1px solid #002A4C"
      },
      "&:active":{
          color:"#002A4C",
          background:"transparent",
          border:"1px solid #002A4C"
      }
    }
  }
  const HeadingNText = [
    {
      heading:"Electricity Production",
      text:"Like the other two solar panels systems, the PV cells generate power when the daylight energizes the electrons in them. This phenomenon produces the current in them, which is carried to the inverter through a network of connecting wires."
    },{
      heading:"Conversion",
      text:"The electrical power is created as Direct Current and is then changed into Alternating Current by the hybrid solar inverter. This Alternating Current of 240 Voltage is then provided to the house."
    },{
      heading:"Storage of Electricity",
      text:"All the abundant power is stored in the batteries until the batteries are completely charged up to their capacities."
    },{
      heading:"Net Metering",
      text:"When the batteries are full, the excess electricity is transmitted to the utility grid system through Net Metering, which allows the consumers to obtain credits for the supplied electricity and balance the credit amount against their bill."
    }
  ]

const Benifits = [
  "A hybrid system can be utilized as both the grid-tie and off-grid systems as you can connect it to batteries and the grid as well.",
  "These systems are most reliable with regards to managing power issues as they can take supplementary electricity from the grid and they also keep on providing electricity in case of load shedding.",
  "The Net Metering option is also available with these systems.",
  "The hybrid system, much the same as other solar systems are a magnificent method to conserve the environment by the utilization of sustainable power sources."
]

const imageUrl = [__dirname,"Images/Hybrid-Solar-System-in-Pakistan.webp"].join("");
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.mainHeadingBox}>
        <Heading sx={styles.mainHeading}>{headingMain === undefined ? "Hybrid Solar System in Pakistan":headingMain}</Heading>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}
      >
        <Box sx={styles.smallLine}>.</Box>
        <Box sx={styles.smallBox}>.</Box>
        <Box sx={styles.smallLine2}>.</Box>
      </Box>

     <Text sx={{fontFamily:"Montserrat, sans-serif",color: "#002A4C",}}>
     {mainDesc === undefined ? "The on-grid system is cost-effective and allows you to sell the surplus power, and the off-grid solution permits you continuous electricity during power outages. The cons of both systems urged the manufacturers to invent a system that could provide dual functionality. The outcome was a system that had all the prominent characteristics of both grid-tie and off-grid systems and could be utilized as both. The crossover properties prompted the structure to be named the Hybrid Solar system.":mainDesc}
     </Text>
     <Box sx={styles.imageStyles}>
     <Image src={mainImage === undefined ? imageUrl : mainImage} alt="Image is not loaded" />
     </Box>
     <Box sx={{display:"flex",justifyContent:"center",marginY:"20px"}}><Box sx={styles.smallLine}>.</Box></Box>
     <Box sx={styles.mainHeadingBox}>
     <Heading sx={styles.mainHeading2}>
     {secondHeading === undefined ? "How Does A Hybrid System in Pakistan Works?" : secondHeading }
     </Heading> 
     </Box>
    {secondHNT === undefined ? HeadingNText.map((HeadT,i)=>( 
      <Slide left>
    <Box key={i} sx={{marginY:"40px"}}>
    <Heading sx={{fontWeight:600,fontSize:"22px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
    {HeadT.heading}
    </Heading>
    <Text  sx={{fontWeight:500,fontSize:"16px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
    {HeadT.text}
    </Text>
     </Box>
     </Slide>)) : 
     secondHNT.map((HeadT,i)=>( 
      <Slide left>
    <Box key={i} sx={{marginY:"40px"}}>
    <Heading sx={{fontWeight:600,fontSize:"22px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
    {HeadT.heading}
    </Heading>
    <Text  sx={{fontWeight:500,fontSize:"16px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
    {HeadT.text}
    </Text>
     </Box>
     </Slide>))  
     }
     <Box sx={{display:"flex",justifyContent:"center",marginY:"20px"}}><Box sx={styles.smallLine}>.</Box></Box>
     <Box sx={styles.mainHeadingBox}>
     <Heading sx={styles.mainHeading2}>
    {thirdHeading === undefined ? "Benefits of Hybrid Solar System in Pakistan" : thirdHeading}
     </Heading> 
     <Heading sx={styles.mainHeading}>
     {thirdSubHeading === undefined ? "On-Grid Solar System in Pakistan" : thirdSubHeading}
     </Heading> 
     </Box>
      <Box>
        <Text sx={{fontWeight:400,fontSize:"14px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
        {thirdSubsmallHeading === undefined ? "The advantages of a hybrid solar arrangement are:" : thirdSubsmallHeading}
        </Text>
      <Box sx={{marginY:"40px"}}>
      <ul>
        { 
        thirdList === undefined ?
Benifits.map((benifit,i)=>(
<li key={i}>
<Slide right>
<Text sx={{fontWeight:500,fontSize:"16px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
        {benifit}
        </Text>
</Slide>
</li>
)) : 
thirdList.map((benifit,i)=>(
  <li key={i}>
  <Slide right>
  <Text sx={{fontWeight:500,fontSize:"16px",fontFamily:"Montserrat, sans-serif",color:"#002A4C"}}>
          {benifit}
          </Text>
  </Slide>
  </li>
  )) 
        }
      </ul>
      </Box>
      </Box>

      <Button sx={styles.buttonVariant} onClick={()=>{navigate('/packages')}}> Explore Packages
  </Button>

    </Box>
  )
}

export default services_details
