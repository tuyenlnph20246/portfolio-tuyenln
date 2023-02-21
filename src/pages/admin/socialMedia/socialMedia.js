import sidebar from "@/components/adminComponents/sidebar";
import { useEffect, useState } from "@/lib";
import { getMedias,deleteMedia } from "@/api/socialMedia";
const socialMedia = () => {
  const [medias, setMedia] = useState([]);
  console.log(medias)
  useEffect(()=>{
    (async () => {
      try {
        setMedia(await getMedias())
      } catch (error) {
        console.log(error)
      }
    })();
  },[])


  useEffect(()=>{
    const btnMedia = document.querySelectorAll(".btnMedia-remove");
    for(let btn of btnMedia){
      btn.addEventListener("click", async () =>{
        try {
          const id = btn.dataset.id;
          const confirm = window.confirm("Bạn có muốn xóa không ?");
          if (confirm){
            deleteMedia(id)
            .then(()=>{
              const newMedia = medias.filter((media)=> media.id != id);
              setMedia(newMedia)
            })
          }
        } catch (error) {
          console.log(error)
        }
      })
    }
  })
  return ` 
   <div class="container mx-auto w4/5 flex border">
      ${sidebar()}
      <div class="grow p-2">
      <div class="">
      <h1 class="text-2xl font-medium">Quản lí mạng xã hội</h1>
    <table class="border-collapse border border-slate-300 w-full mt-3">
      <thead>
        <tr>
          <th class="border border-slate-300 py-2">STT</th>
          <th class="border border-slate-300 py-2">Tên MXH</th>
          <th class="border border-slate-300 py-2">Link</th>
          <th class="border border-slate-300 py-2">Tùy chỉnh</th>
        </tr>
      </thead>
      <tbody class="text-center">
      ${medias.map((media,index)=>{
        return `
        <tr>
        <td class="border border-slate-300 py-2">${index + 1}</td>
        <td class="border border-slate-300 py-2">${media.name}</td>
        <td class="border border-slate-300 py-2">${media.link}</td>
        <td class="border border-slate-300 py-2">
         <button class="mx-4 btnMedia-remove" id="" data-id="${media.id}">
          <i class="fas fa-trash-alt text-red-500"></i>
         </button>
         <a href="/admin/socialmedias/${media.id}/edit" class="mx-4">
         <i class="fas fa-edit text-blue-500"></i>
         </a>
        </td>
      </tr>
        `
      }).join("")}
      </tbody>
    </table>
    <a href="/admin/socialmedias/add">
      <button class="px-5 py-2 bg-blue-500 rounded-md text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 mt-5">Thêm mới</button>
    </a>
  </div>
      </div>
    </div>
   `;
};

export default socialMedia;
