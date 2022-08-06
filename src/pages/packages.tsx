import React from 'react'
import { Box, Heading } from 'theme-ui'
import PackageCards from '../components/Cards/PackageCards'
import packImg from '../Images/head2.webp'
const packages = () => {
    const benifits = ["10 ceiling fans","20 Energy saver","1 Water Pump","1 Invertor AC","1 Refrigerator"]
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
            fontWeight:500,
            fontSize:"25px",
            color:"#002A4C",
            margin:"auto",
            marginBottom:"16px"
        },
        mainHeadingBox:{
            display:"flex",
            flexDirection:"column",
            margin:"auto",
            width:"100%"
        },
        mainBox:{
            marginX:"80px",
            marginY:"80px",
            '@media (max-width:450px )': {
                marginX:"10px",
            }    
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
    
  return (
       <Box sx={styles.mainBox}>

<Box sx={styles.mainHeadingBox}>
            <Heading sx={styles.mainHeading}>
                Some Packages
            </Heading>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginBottom:"25px"}}>
            <Box sx={styles.smallLine}>.</Box>
            <Box sx={styles.smallBox} >.</Box>
            <Box sx={styles.smallLine2}>.</Box>
        </Box>

       <Box sx={{display:"flex",flexWrap:"wrap"}}>
       <PackageCards  image={packImg} mainHeading="Basic Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Gold Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Premium Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Basic Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Gold Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Premium Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Basic Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Gold Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Premium Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Basic Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Gold Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Premium Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Basic Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Gold Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
            <PackageCards  image={packImg} mainHeading="Premium Solar" location={"Pakistan"} details={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} link={"/packages_details"}/>
   
             </Box>
</Box>
  )
}

export default packages