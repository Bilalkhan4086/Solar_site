import { Badge } from 'react-bootstrap'
import React from 'react'
import { Box, Button, Heading, Image } from 'theme-ui'
import Cards from "../components/Cards/Cards"
import { CalendarTodayOutlined, CheckCircle } from "@mui/icons-material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Rating , Typography } from '@mui/material'
import packageImg from "../Images/packages.webp"

const hotel_detalis = ({PackageName,badgeLabel,Ratings,Description,PackageHighlights,PackageOffer,PrimaryDetail1,PrimaryDetail2}) => {
  const styles = {
    container: {
      marginX: "10%",
      marginTop: "30px",
      marginBottom: "100px",
      fontFamily:"Montserrat,sans-serif",
      "@media (max-width:600px)":{
        marginX: "5%"
      }
    },
    mainHeadingDiv: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily:"Montserrat,sans-serif"
    },
    headerDiv: {
      color: "red",
      fontFamily:"Montserrat,sans-serif"
    },
    mainHeading: {
      fontSize: "1.6rem",
      color: "#002A4C",
      fontWeight: "bold",
      fontFamily:"Montserrat,sans-serif"
    },
    description: {
      fontSize: "1rem",
      color: "#002A4C",
      fontFamily:"Montserrat,sans-serif"
    },
    imageDiv: {
      borderRadius: "2px",
      backgroundColor: "rgba(0,50,0,0.2)",
      fontFamily:"Montserrat,sans-serif",
      display:"flex",
      height:"200px",
      marginBottom:"15px",
        width:"100%",
        overflow:"hidden",
      transition:"0.5s ease",
      "&:hover":{
        backgroundColor:"rgba(0,10,0,0.5)"
      }
    },
    imageDiv2: {
      fontFamily:"Montserrat,sans-serif",
      margin:"auto",
      transition:"0.5s ease",
      objectFit: "cover",
      "&:hover":{
        transform:"scale(1.1)"
      }
    },
    imageCardDiv: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily:"Montserrat,sans-serif"
    },
    mapDiv: {
      borderRadius: "20px",
      marginTop: "10px",
      fontFamily:"Montserrat,sans-serif"
    },
    packageSummaryTab: {
      color: "#002A4C",
      borderBottom: "5px solid green",
      paddingTop: "20px",
      paddingBottom: "10px",
      width: "138px",
      fontFamily:"Montserrat,sans-serif",
      fontSize:"14px"
    },
    packageSummaryHeading: {
      color: "#002A4C",
      paddingTop: "25px",
      paddingBottom: "10px",
      fontWeight: "bold",
      fontFamily:"Montserrat,sans-serif"
    },
    packageHighlightsHeading: {
      color: "whitesmoke",
      padding: "10px 25px",
      background: "linear-gradient(36deg, rgba(5,50,76,1) 44%, rgba(106,189,69,1) 100%)",
      borderRadius: "5px",
      width: "100%",
      fontFamily:"Montserrat,sans-serif",
      "@media (min-width:1250px)":{
        width: "500px"
      }
    },
    PrimaryHeadlightBox: {
      display: "flex",
      flexFlow: "wrap",
      width: "500px",
      marginTop: "20px",
      fontFamily:"Montserrat,sans-serif",
      "@media (max-width:1250px)":{
        width: "100%"
      }
    },
    OffersBox: {
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-between",
      marginTop: "20px",
      fontFamily:"Montserrat,sans-serif",
      "@media (max-width:1250px)":{
        width: "100%"
      }
    },
    textDiv: {
      width: "200px",
      margin: "10px",
      fontFamily:"Montserrat,sans-serif"
    },
    textDivExtended: {
      width: "200px",
      margin: "20px",
      fontFamily:"Montserrat,sans-serif"
    },
    packageSummaryDetailsHeading: {
      color: "whitesmoke",
      padding: "10px 25px",
      background: "linear-gradient(36deg, rgba(5,50,76,1) 44%, rgba(106,189,69,1) 100%)",
      borderRadius: "5px",
      fontFamily:"Montserrat,sans-serif"
    },
    buttonVariant:{
      background:"linear-gradient(90deg, #5aa236, #a6dc6d 51%, #5aa236) var(--x, 0)/ 200%",
      borderRadius:"3px",
      height:"40px",
      width:"150px",
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
      },"@media (max-width:513px)":{
        height:"60px"
      },"@media (max-width:290px)":{
        height:"80px"
      }
    }
  }

  const highlights = ["Highligh flexible schedules ", "Isn’t that the dream now", "schedules and elite team members", "High flexible schedules", "flexible schedules", "High elite team members"]
  const offers = ["Highligh flexible schedules ", "Isn’t that the dream now", "schedules and elite team members", "High flexible schedules", "flexible schedules", "High elite team members"]
  const mealPlans = ["I that the dream now", "schedules and elite team members"]
  let PackageOffers = ["flexible schedules and elite team members! (Isnt that the dream now?)","flexible schedules and elite team members! (Isnt that the dream now?)",'* valid till 30 April 2022']
  return (
    <Box sx={styles.container}>

<Box sx={styles.imageCardDiv}>

<Box sx={styles.imageDiv}>
  <Image sx={styles.imageDiv2} src={packageImg} width="100%" />
</Box>
<Box>
</Box>
</Box>


      {/* heading */}
      <Box sx={styles.mainHeadingDiv}>
        <Box>
        <Box style={{ display: "flex",justifyContent:"space-between" }}>
          <Box>
            <Typography style={styles.mainHeading}  >{PackageName === undefined ? "GRAND MARQUEE TOWN":PackageName.toUpperCase()}</Typography>
            <Box style={{ marginTop: "7px" }}>
              <Badge bg="danger">{badgeLabel === undefined ? "Premium":badgeLabel}</Badge>
            </Box>
          </Box>
  <Button sx={styles.buttonVariant}>
   <AddShoppingCartIcon sx={{color:"smoke-white"}}/> Add to cart
  </Button>
          </Box>
          <Typography style={styles.description}  >{Description === undefined ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." : Description}</Typography>
          <Heading  sx={{fontSize:"18px",color:"#002A4C",fontWeight:800}}>
  Rating <span style={{color:"#4039b1"}}>{Ratings === undefined ? 4:Ratings}</span> out of <span style={{color:"#4039b1"}}>5</span>
</Heading>
          <Box sx={{display:"flex"}}>
          <Rating style={{color:"#e0c700"}} value={Ratings === undefined ? 4:Ratings}/>
</Box>
        </Box>
       
      </Box>

      {/* image */}

     
      <Box>
        <Typography variant='body1' style={styles.packageSummaryTab}>
          Package Summary
        </Typography>
      </Box>


      <Box>
        <Typography variant='h5' style={styles.packageSummaryHeading}>
          PACKAGE SUMMARY
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" ,flexWrap:"wrap"}}>

          <Box>
            <Typography variant='body1' style={styles.packageHighlightsHeading}>
              Package Highlights
            </Typography>

            <Box sx={styles.PrimaryHeadlightBox}>
              {PackageHighlights === undefined ? highlights.map((highlight, i) => (
                <Typography style={styles.textDiv} key={i} variant='body2'>
                  <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <CheckCircle />
                    <Box style={{ width: "160px" }}>
                      {highlight}
                    </Box>
                  </Box>
                </Typography>
              )) : PackageHighlights.map((highlight, i) => (
                <Typography style={styles.textDiv} key={i} variant='body2'>
                  <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <CheckCircle />
                    <Box style={{ width: "160px" }}>
                      {highlight}
                    </Box>
                  </Box>
                </Typography>
              ))
              }
            </Box>

          </Box>

          <Box>
            <Typography variant='body1' style={styles.packageHighlightsHeading}>
              Package Offers
            </Typography>

            <Box sx={styles.PrimaryHeadlightBox}>

             { PackageOffer === undefined ? PackageOffers.map((highlight, i) => (
                <Typography style={styles.textDiv} key={i} variant='body2'>
                  <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <CheckCircle />
                    <Box style={{ width: "160px" }}>
                      {highlight}
                    </Box>
                  </Box>
                </Typography>
              )) : PackageOffer.map((highlight, i) => (
                <Typography style={styles.textDiv} key={i} variant='body2'>
                  <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <CheckCircle />
                    <Box style={{ width: "160px" }}>
                      {highlight}
                    </Box>
                  </Box>
                </Typography>
              ))}
              

             
            </Box>

          </Box>

        </Box>
        <Box>

          <Typography style={styles.packageSummaryDetailsHeading}>
            Primary Summary Details
          </Typography>

        </Box>
        <Box>
          <Typography style={{ color: "#002A4C", margin: "20px",fontFamily:"Montserrat,sans-serif",fontWeight:800 }}>
            Perchase Includes
          </Typography>
        </Box>
        {PrimaryDetail1 === undefined ?
          offers.map((offer) => (<Typography style={{ margin: "20px",fontFamily:"Montserrat,sans-serif"  }} variant='body2'>
            <Box style={{ display: "flex" }}>
              <CheckCircle />
              <Box style={{ marginLeft: "20px",fontFamily:"Montserrat,sans-serif" }}>
                {offer}
              </Box>
            </Box>
          </Typography>
          )) : 
          PrimaryDetail1.map((offer) => (<Typography style={{ margin: "20px",fontFamily:"Montserrat,sans-serif"  }} variant='body2'>
            <Box style={{ display: "flex" }}>
              <CheckCircle />
              <Box style={{ marginLeft: "20px",fontFamily:"Montserrat,sans-serif" }}>
                {offer}
              </Box>
            </Box>
          </Typography>
          ))
          }

      </Box>
      <Box>
        <Typography style={{ color: "#002A4C",fontFamily:"Montserrat,sans-serif", margin: "20px", marginTop: "50px" ,fontWeight:800 }}>
          Meal plans available
        </Typography>
      </Box>
      {PrimaryDetail2 === undefined ? 
        mealPlans.map((meal) => (
          <Typography style={{ margin: "20px",fontFamily:"Montserrat,sans-serif" }} variant='body2'>
            <Box style={{ display: "flex" }}>
              <CheckCircle />
              <Box style={{ marginLeft: "20px",fontFamily:"Montserrat,sans-serif" }}>
                {meal}
              </Box>
            </Box>
          </Typography>
        )):
        PrimaryDetail2.map((meal) => (
          <Typography style={{ margin: "20px",fontFamily:"Montserrat,sans-serif" }} variant='body2'>
            <Box style={{ display: "flex" }}>
              <CheckCircle />
              <Box style={{ marginLeft: "20px",fontFamily:"Montserrat,sans-serif" }}>
                {meal}
              </Box>
            </Box>
          </Typography>))
      }

    </Box>
  )
}

export default hotel_detalis
