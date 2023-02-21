import { useState, useEffect } from "@/lib";
import { deleteNavs, getNavs } from "@/api/navs";
const content = () => {
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

 useEffect(()=>{
  const btnNav = document.querySelectorAll(".btnNav-remove");
  for(let btn of btnNav){
      btn.addEventListener("click", async ()=>{
        try {
          const id = btn.dataset.id;
          const confirm = window.confirm("Bạn có muốn xóa không ?")
          if(confirm){
          deleteNavs(id)
          .then(()=>{
            const newNavs = navs.filter((nav)=> nav.id != id);
            setNavs(newNavs);
          })
        }
        } catch (error) {
          console.log(error)
        }
      })
  }
 });

  return (
    `
    <div class="grow p-2">
    <div class="">
    <h1 class="text-2xl font-medium">Quản lí menu</h1>
  <table class="border-collapse border border-slate-300 w-full mt-3">
    <thead>
      <tr>
        <th class="border border-slate-300 py-2">STT</th>
        <th class="border border-slate-300 py-2">Tên menu</th>
        <th class="border border-slate-300 py-2">Link</th>
        <th class="border border-slate-300 py-2">Tùy chỉnh</th>
      </tr>
    </thead>
    <tbody class="text-center">
    ${navs.map((nav, index)=>{
        return `
        <tr>
        <td class="border border-slate-300 py-2">${index + 1}</td>
        <td class="border border-slate-300 py-2">${nav.name}</td>
        <td class="border border-slate-300 py-2">${nav.link}</td>
        <td class="border border-slate-300 py-2">
         <button class="mx-4 btnNav-remove" id="" data-id="${
          nav.id
          }">
          <i class="fas fa-trash-alt text-red-500"></i>
         </button>
         <a href="/admin/navs/${nav.id}/edit" class="mx-4">
         <i class="fas fa-edit text-blue-500"></i>
         </a>
        </td>
      </tr>
        `
    }).join("")}
      
    </tbody>
  </table>
  <a href="/admin/navs/add">
    <button class="px-5 py-2 bg-blue-500 rounded-md text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  mt-5">Thêm mới</button>
  </a>
</div>
    </div>
    `
  )
}

export default content