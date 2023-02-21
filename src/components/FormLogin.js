import { getAccounts } from "@/api/account";
import { router, useEffect, useState } from "@/lib";
const FormLogin = () => {
  const [login, setLogin] = useState([]);
  console.log(login)
  useEffect(()=>{
    (async()=>{
      try {
        setLogin(await getAccounts())
      } catch (error) {
        console.log(error)
      }
    })()
  },[])
  useEffect(()=>{
    document.getElementById("btn-form-login").addEventListener("click", ()=>{
      document.getElementById("form-login").style.display = "block";
      let close = document.getElementById("btn-close-login");
      close.addEventListener("click",()=>{
        document.getElementById("form-login").style.display = "none";
      })
    });
  });
  useEffect(()=>{
    const formLogin = document.getElementById("formLogin");
    const userLogin = document.getElementById("userLogin");
    const passLogin = document.getElementById("passLogin");
    const errorUser = document.getElementById("#errorUser");
    const errorPass = document.getElementById("#errorPass");
    formLogin.addEventListener("submit",async (e)=>{
      e.preventDefault()
      try {
        const valueLogin = {
          name: userLogin.value,
          password: passLogin.value,
        }
        login.filter((element) => {
          if(element.name == valueLogin.name && element.password == valueLogin.password){
            router.navigate("/admin");
          }else{
            alert("Sai tài khoản hoặc mật khẩu vui lòng nhập lại");
          }
        });
      } catch (error) {
        console.log(error)
      }
    })
  })
  return `
   <div id="form-login" class="hidden form-login w-[350px] bg-[#ffffff] p-3 rounded-xl shadow-lg animate">
   <div class="absolute right-2 top-2 hover:text-red-500">
    <button id="btn-close-login">
     <i class="fas fa-window-close text-3xl shadow-lg"></i>
    </button>
   </div>
   <div class="flex flex-col items-center">
     <img src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt="" class="w-[100px] h-[100px] object-cover rounded-full">
     <p class="text-center my-3">Luu Ngoc Tuyen</p>
   </div>
   <form action="" class="flex flex-col gap-y-4" id="formLogin">
     <div class="flex flex-col gap-y-5">
       <label for="">User Name</label>
       <input type="text" id="userLogin" class="py-2 pl-2 rounded-lg border shadow-lg focus:outline-none focus:border-[#F2921D] focus:ring-1 focus:ring-[#F2921D]">
     </div>
     <div class="flex flex-col gap-y-5">
       <label for="">Password</label>
       <input type="password" id="passLogin" class="py-2 pl-2 rounded-lg border shadow-lg focus:outline-none focus:border-[#F2921D] focus:ring-1 focus:ring-[#F2921D]">
     </div>
     <div class="flex justify-between items-center">
       <div class="">
         <button class="px-6 py-2 bg-[#F2921D] rounded-xl text-white shadow-lg">Login</button>
       </div>
       <div class="">
         <a href="" class="text-blue-500">
           Forgot Password?
         </a>
         <a href="" class="text-red-500">
           Signup
         </a>
       </div>
     </div>
   </form>
 </div>
   `;
};

export default FormLogin;
