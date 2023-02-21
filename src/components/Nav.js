import { useState,useEffect } from "@/lib";
import { getNavs } from "@/api/navs";
const Nav = () => {
  const [navs, setNavs] = useState([]);
  useEffect(()=>{
   (async ()=>{
     try {
       setNavs(await getNavs())
     } catch (error) {
       console.log(error)
     }
   })()
  },[]);
  return (
    `
    <nav>
    ${navs.map((nav)=>{
      return `
      <a href="${nav.link}" class="px-3 mx-3 py-2 item-nav-effect font-medium">${nav.name}</a>
      `
    }).join("")}
         
    </nav>
    `
  )
}

export default Nav