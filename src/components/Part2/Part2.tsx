import React from 'react'
import { Box, Button, Heading, Image, Text } from 'theme-ui'
import  part2image  from '../../Images/part2Img.webp'
import  icon5  from '../../Images/solar-icon5.webp'
import  icon6  from '../../Images/solar-icon6.webp'
import  icon7  from '../../Images/solar-icon7.webp'
import  icon8  from '../../Images/solar-icon8.webp'

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
        width:"80px",
        height:"1px",
        marginTop:"-4px"
    },
    underline:{
marginY:"10px"
    },
    smallHeading:{
        color:"#002A4C",
        fontFamily:"Montserrat, sans-serif",
        fontSize:"24px",
        fontWeight:550
    },
    headingLeft:{
        fontSize:"40px",
        width:"500px",
        fontFamily:"Montserrat, sans-serif",
        '@media (max-width:1150px ) and (min-width:900px )': {
            fontSize:"50px",
            width:"860px"
              },
              '@media (max-width:899px ) and (min-width:700px )': {
                fontSize:"40px",
                width:"660px"
                  },
                  '@media (max-width:699px ) and (min-width:550px )': {
                    fontSize:"35px",
                    width:"500px"
                      },
              '@media (max-width:549px ) and (min-width:300px )': {
                fontSize:"30px",
                width:"95%"
                  },
                  '@media (max-width:299px )': {
                    fontSize:"25px",
                    width:"95%"
                      }

    },
    textLeft:{
        fontSize:"16px",
        fontFamily:"Montserrat ,sans-serif",
        width:"500px",
        fontWeight:400,
        marginY:"20px",
        '@media (max-width:1150px ) and (min-width:900px )': {
            fontSize:"20px",
            width:"800px"
              },
              '@media (max-width:899px ) and (min-width:700px )': {
                fontSize:"19px",
                width:"660px"
                  },
              '@media (max-width:699px ) and (min-width:550px )': {
                fontSize:"19px",
                width:"500px"
                  },
                  '@media (max-width:549px ) and (min-width:300px )': {
                    fontSize:"18px",
                    width:"95%"
                      },
                  '@media (max-width:299px )': {
                    fontSize:"16px",
                    width:"95%"
                      }
    },
    buttonReadMore:{
      background:"linear-gradient(90deg, #5aa236, #a6dc6d 51%, #5aa236) var(--x, 0)/ 200%",
      marginTop:"40px",
        borderRadius:"30px",
        height:"50px",
        fontSize:"16px",
        width:"150px",
        cursor:"pointer",
        transition: "0.3s",
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
    },
    CardBox:{
        width:"230px",
        height:"280px",
        padding:"20px",
        color:"white",
        backgroundColor:"#002A4C",
        fontFamily:"Montserrat, sans-serif",
        display:"flex",
        margin:"20px",
        marginLeft:"10px",
        flexDirection:"column",
        '&:hover': {
            backgroundColor: '#549a3e',
          },
          transition:"0.5s",
          '@media screen and (min-width:1151px )': {
            '&:hover': {
                backgroundColor: '#549a3e',
              transform: "rotate(0deg)"
              },
              transform: "rotate(10deg)"      
              },
          '@media (max-width:1150px ) and (min-width:960px )': {
            width:"400px",
            height:"300px",
            padding:"20px"
              },
              '@media (max-width:959px ) and (min-width:600px )': {
                width:"40%",
                height:"300px",
                padding:"20px"
                  },
                  '@media (max-width:599px ) and (min-width:300px )': {
                    width:"80%",
                    height:"300px",
                    padding:"20px"
                      },
                      '@media (max-width:299px)': {
                        width:"95%",
                        height:"300px",
                        padding:"20px"
                          }
    },
    CardHeading:{
        fontFamily:"Montserrat, sans-serif",
        fontSize:"18px",
        margin:"auto",
    },
    RightSide:{
display:"flex",
justifyContent:"center",
margin:"auto",
flexWrap:"wrap",
width:"550px",
marginRight:"20px",
'@media (max-width:1150px)': {
    width:"90%",
    margin:"auto",
    marginTop:"20px"
      }

    },
    mainBox:{
        display:"flex",
        justifyContent:"space-around",
        marginY:"30px",
        flexWrap:"wrap"
    },
    leftSide:{
        width:"550px",
        marginLeft:"20px",
        '@media (max-width:1150px)': {
            width:"90%"
              }
    },
    leftImage:{
      width:"500px",
      '@media (max-width:1150px ) and (min-width:900px )': {
          width:"860px"
            },
            '@media (max-width:899px ) and (min-width:700px )': {
              width:"660px"
                },
                '@media (max-width:699px ) and (min-width:550px )': {
                  width:"500px"
                    },
            '@media (max-width:549px ) and (min-width:300px )': {
              width:"95%"
                },
                '@media (max-width:299px )': {
                  width:"95%"
                    }
    }
}

const Part2 = () => {
  return (
<Box sx={styles.mainBox}>
    {/* left */}
<Box sx={styles.leftSide}>
<Box>
        <Text sx={styles.smallHeading}>Solar Energy</Text>
        <Box sx={styles.underline}>
        <Box sx={styles.smallBox} >.</Box>
        <Box sx={styles.smallLine}>.</Box>
        </Box>
        <Box>
            <Heading sx={styles.headingLeft}>We Write About Natural Energy</Heading>
        <Heading sx={styles.textLeft}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Heading>
        </Box>
        </Box>
        <Box>
            <Image src={part2image} sx={styles.leftImage} alt="Image is not Loaded due to connection"/>
        </Box>
    <Box>
        <Button sx={styles.buttonReadMore}>
            Read More
        </Button>
    </Box>
</Box>
    {/* Right */}
<Box>
<Box sx={styles.RightSide}>
     <Box sx={styles.CardBox}>
        <Image src={icon5} sx={{width:"100px",height:"102px",marginX:"auto"}} alt="no Loaded"/>
        <Heading sx={styles.CardHeading}>The Powerhouse</Heading>
        <Heading sx={{margin:"auto",fontWeight:300,fontSize:"17px",fontFamily:"Montserrat, sans-serif",justifyContent:"center",textAlign:"center"}}>It is a long established fact that a reader will be distracted</Heading>
        </Box>   

        <Box sx={styles.CardBox}>
        <Image src={icon6} sx={{width:"100px",height:"102px",marginX:"auto"}} alt="no Loaded"/>
        <Heading sx={styles.CardHeading}>The Greenhouse</Heading>
        <Heading sx={{margin:"auto",fontWeight:300,fontSize:"17px",fontFamily:"Montserrat, sans-serif",justifyContent:"center",textAlign:"center"}}>It is a long established fact that a reader will be distracted</Heading>
        </Box>   

        <Box sx={styles.CardBox}>
        <Image src={icon7} sx={{width:"100px",height:"102px",marginX:"auto"}} alt="no Loaded"/>
        <Heading sx={styles.CardHeading}>Solar Ventilation</Heading>
        <Heading sx={{margin:"auto",fontWeight:300,fontSize:"17px",fontFamily:"Montserrat, sans-serif",justifyContent:"center",textAlign:"center"}}>It is a long established fact that a reader will be distracted</Heading>
        </Box>   

        <Box sx={styles.CardBox}>
        <Image src={icon8} sx={{width:"100px",height:"102px",marginX:"auto"}} alt="no Loaded"/>
        <Heading sx={styles.CardHeading}>Solar Panels</Heading>
        <Heading sx={{margin:"auto",fontWeight:300,fontSize:"17px",fontFamily:"Montserrat, sans-serif",justifyContent:"center",textAlign:"center"}}>It is a long established fact that a reader will be distracted</Heading>
        </Box>   

        </Box>
        <Box>
            
        </Box>
    
</Box>
</Box>
)
}

export default Part2