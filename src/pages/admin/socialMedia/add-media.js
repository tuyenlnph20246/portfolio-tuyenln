import { addMedia } from "@/api/socialMedia";
import sidebar from "@/components/adminComponents/sidebar"
import { router, useEffect } from "@/lib"
const MediaAddPage = () => {
  useEffect(()=>{
    const form = document.querySelector("#mediaForm-add");
    const mediaName = document.querySelector("#media-name");
    const mediaLink = document.querySelector("#media-link");
    form.addEventListener("submit", async (e)=>{
      try {
        e.preventDefault();
        const formDataMedia = {
          name: mediaName.value,
          link: mediaLink.value
        }
        await addMedia(formDataMedia);
        router.navigate("/admin/socialmedias")
      } catch (error) {
        console.log(error)
      }
    })
  })
  return (
    `
    <div class="container mx-auto w4/5 flex border">
      ${sidebar()}
      <div class="grow p-2">
      <div className="">
        <h1 class="text-2xl font-medium">Quản lí mạng xã hội</h1></div>
      <form action="" id="mediaForm-add" class="mt-3">
      <div class="flex flex-col gap-3">
        <label for="" class="text-xl">Tên MXH</label>
        <input type="text" id="media-name" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
      </div>
      <div class="flex flex-col gap-3">
        <label for="" class="text-xl">Link MXH</label>
        <input type="text" id="media-link" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
      </div>
      <button class="px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  text-white transition rounded-md border mt-3 bg-blue-500">Thêm</button>
    </form>
      </div>
    </div>
    `
  )
}

export default MediaAddPage