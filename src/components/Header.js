import { useEffect } from "@/lib"
import FormLogin from "./FormLogin"
import Nav from "./Nav"
const Header = () => {
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      let header = document.querySelector("header");
      header.classList.toggle("scroll", window.scrollY > 0)
    })
  })
  return (
   ` 
   <header class="flex justify-between p-2 items-center sticky">
    <div class="">
      <div class="">
          <button id="btn-form-login" class="hover:bg-red-600 transition-colors px-5 py-2 shadow-lg bg-[#f2921d] text-white rounded-2xl">I'm Tuyen</button>
      </div>
      ${FormLogin()}
    </div>
    <div className="">
      ${Nav()}
    </div>
   </header>
   `
  )
}

export default Header