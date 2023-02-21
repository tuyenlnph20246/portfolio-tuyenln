import AboutMe from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import IntroYourself from "@/components/Intro"
import Portfolio from "@/components/Portfolio"
import Service from "@/components/Service"
import Testmonial from "@/components/Testmonial"
const Homepage = () => {
  return (
    `
    <div class="bg-gray-200 bg-affter">
    <div class="container bg-container shadow-xl">
     ${Header()}
     ${IntroYourself()}
     ${AboutMe()}
     ${Service()}
     ${Portfolio()}
     ${Testmonial()}
     ${Contact()}
     ${Footer()}
    </div>
    </div>
    `
  )
}

export default Homepage