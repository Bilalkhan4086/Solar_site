import React from "react"
import ContactUs from "../components/ContactUs/ContactUs"
import {NavBar} from "../components/Header/Navbar"
import Hero from "../components/HomeDisplay/Hero"
import Part2 from "../components/Part2/Part2"
import Partners from "../components/Partners/Partners"
import Services from "../components/Services/Services"

export default function Home() {
  return <div>
    <><link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" cross-origin/>
<link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/></>
     <NavBar/>
   <Hero/>
    <Part2/>
    <Services/>
<Partners/>
<ContactUs/>
  </div>
}
