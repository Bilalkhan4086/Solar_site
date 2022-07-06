import React from 'react'
import TaskIcon from '@mui/icons-material/Task';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Heading,Box} from "theme-ui"
const InsightInfoCard = ({detail,number}) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",width:"256.7px",justifyContent:"center",padding:"20px",textAlign:"center"}} >
        {detail === "Project Complete" ? <TaskIcon sx={{"&:hover":{transform: "rotate(360deg)",transition:"0.5s"}}} style={{margin:"auto",fontSize:"70px"}}/> : ""}
        {detail === "Happy Customers" ? <PeopleAltIcon sx={{"&:hover":{transform: "rotate(360deg)",transition:"0.5s"}}} style={{margin:"auto",fontSize:"70px"}}/> : ""}
        {detail === "Installation Time" ? <AccessTimeFilledIcon sx={{"&:hover":{transform: "rotate(360deg)",transition:"0.5s"}}} style={{margin:"auto",fontSize:"70px"}}/> : ""}
        {detail === "Sales" ? <AutoGraphIcon sx={{"&:hover":{transform: "rotate(360deg)",transition:"0.5s"}}} style={{margin:"auto",fontSize:"70px"}}/>: ""}
    <Heading sx={{fontFamily:"Montserrat,sans-serif",fontWeight:700,fontSize:"40px"}}>
        {number}{detail === "Installation Time" ? <span style={{marginLeft:"10px",fontSize:"18px"}} >days</span> :""}
    </Heading>
    <hr style={{width:"70%",color:"white",opacity:"1",height:"3px",margin:"20px auto"}}/>
    <Heading sx={{fontFamily:"Montserrat,sans-serif",fontWeight:600,fontSize:"20px"}}>
        {detail.toUpperCase()}
    </Heading>
    </Box>
  )
}

export default InsightInfoCard