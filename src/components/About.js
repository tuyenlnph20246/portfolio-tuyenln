
const AboutMe = () => {
  return (
    `
    <section class="h-[80vh] p-5" id="about">
         <div class="text-center text-3xl text-gray-400">
           About Me
         </div>
        <div class="grid grid-cols-2 w-3/4 mx-auto p-2 mt-12">
         <div class="w-[300px] ">
           <img src="./src/image/author.jpg" alt="" class="w-full rounded-3xl shadow-lg">
         </div>
         <div class="flex flex-col gap-y-6">
           <div class="flex justify-between">
             <!-- item about -->
             <div class="border p-5 text-center rounded-2xl shadow-md">
               <i class="fas fa-lightbulb"></i>
               <p>Experience</p>
               <p class="text-sm text-[#B2B2B2]">1 + Years</p>
             </div>
             <div class="border p-5 text-center rounded-2xl shadow-md">
               <i class="fas fa-briefcase"></i>
               <p>Completed</p>
               <p class="text-sm text-[#B2B2B2]">5 Projects</p>
             </div>
             <div class="border p-5 text-center rounded-2xl shadow-md">
               <i class="fas fa-headphones"></i>    
               <p>Subport</p>
               <p class="text-sm text-[#B2B2B2]">Online 24/7</p>
             </div>  
             <!-- end item about -->
           </div>
           <div class="">
             <p>Font End Developer, I create pages witch UI/UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>
           </div>
           <div class="">
             <button class="bg-[#A31ACB] hover:bg-gradient-to-r hover:from-[#A31ACB] hover:via-fuchsia-400 hover:to-blue-500 px-5 py-2 rounded-2xl text-white transition-all">
               Download CV
               <i class="fa-solid fa-download"></i>
             </button>
           </div>
         </div>
        </div>
       </section>
    `
  )
}

export default AboutMe