import { getMedia, updateMedia } from "@/api/socialMedia";
import { useEffect, useState, router } from "@/lib"
import sidebar from "@/components/adminComponents/sidebar";
const MediaEditPage = ({id}) => {
  const [media, setMedia] = useState({});
  useEffect(()=>{
    (async () => {
      try {
        setMedia(await getMedia(id))
      } catch (error) {
        console.log(error)
      }
    })()
  },[]);
  useEffect(()=>{
    const formEditMedia = document.getElementById("NavForm-edit");
    const nameEditMedia = document.getElementById("nav-nameEdit");
    const linkEditMedia = document.getElementById("nav-linkEdit");
    formEditMedia.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const formEditData = {
          id,
          name: nameEditMedia.value,
          link: linkEditMedia.value
        }
        await updateMedia(formEditData);
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
    <h1 class="text-2xl font-medium">Quản lí menu</h1></div>
  <form action="" id="NavForm-edit" class="mt-3">
  <div class="flex flex-col gap-3">
    <label for="" class="text-xl">Tên menu</label>
    <input type="text" id="nav-nameEdit" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value="${media.name}">
  </div>
  <div class="flex flex-col gap-3">
    <label for="" class="text-xl">Link menu</label>
    <input type="text" id="nav-linkEdit" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value="${media.link}">
  </div>
  <button class="px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 bg-blue-500  text-white transition rounded-md border mt-3">Sửa</button>
</form>
  </div>
    </div>
  </div>
    `
  )
}

export default MediaEditPage