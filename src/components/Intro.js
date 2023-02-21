
const IntroYourself = () => {
  return (
    `
    <section class="p-5 flex mt-32 h-[80vh] z-0" id="home">
    <div class="flex-none w-1/2">
      <div class="text-5xl">Learn new skills online with top educators</div>
      <div class="text-2xl my-4">Hi! Im Luu Ngoc Tuyen. Im a Font-End Developer</div>
      <div class="mt-6 flex gap-9">
        <i class="fa-brands fa-html5 text-5xl text-red-500"></i>
        <i class="fa-brands fa-css3-alt text-5xl text-blue-500"></i>
        <i class="fa-brands fa-js text-5xl text-yellow-500"></i>
        <i class="fa-brands fa-php text-5xl text-purple-500"></i>
      </div>
      <div class="mt-12">
        <button class="bg-[#A31ACB] hover:bg-gradient-to-l hover:from-[#A31ACB] hover:via-fuchsia-400 hover:to-blue-500 p-2 text-white rounded-full transition-all">Start Learning Today</button>
        <button class="bg-[#A31ACB] hover:bg-gradient-to-l hover:from-[#A31ACB] hover:via-fuchsia-400 hover:to-blue-500 p-2 text-white rounded-full ml-6 transition-all">Download CV</button>
      </div>
    </div>
    <div class="grow">
      <div class="flex justify-between">
     <div class=" blur-sm bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-[300px] translate-x-40 border-bg-animation">
     </div>
     <div class=" w-[300px]">
      <img src="./src/image/author.jpg" alt="" class="w-full border-bg-animation -translate-x-20 ">
     </div>
    </div>
    </div>
  </section>
    `
  )
}

export default IntroYourself