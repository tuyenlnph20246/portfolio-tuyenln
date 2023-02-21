import { deletePortfolio, getPortfolios } from "@/api/portfolio";
import sidebar from "@/components/adminComponents/sidebar";
import { useEffect, useState } from "@/lib";
const PortfolioAdminPage = () => {
  const [portfolios,setPortfolio] = useState([]);
  useEffect(()=>{
    (async ()=>{
      try {
        setPortfolio(await getPortfolios())
      } catch (error) {
        console.log(error)
      }
    })()
  },[]);
  useEffect(()=>{
    const btnPort = document.querySelectorAll(".btnPort-remove");
    for(let btn of btnPort){
      btn.addEventListener("click", async ()=>{
        try {
          const id = btn.dataset.id;
          const confirm = window.confirm("Bạn có muốn xóa không?");
          if(confirm){
            deletePortfolio(id).then(()=>{
              const newPort = portfolios.filter((port)=> port.id != id);
              setPortfolio(newPort);
            })
          }
        } catch (error) {
          console.log(error)
        }
      })
    }
  })
  return (
    `
    <div class="container mx-auto w4/5 flex border">
    ${sidebar()}
    <div class="grow p-2">
    <div class="">
    <h1 class="text-2xl font-medium">Quản lí dự án</h1>
  <table class="border-collapse border border-slate-300 w-full mt-3">
    <thead>
      <tr>
        <th class="border border-slate-300 py-2">STT</th>
        <th class="border border-slate-300 py-2">Tên dự án</th>
        <th class="border border-slate-300 py-2">Ảnh dự án</th>
        <th class="border border-slate-300 py-2">Mô tả dự án</th>
        <th class="border border-slate-300 py-2">Thời gian làm</th>
        <th class="border border-slate-300 py-2">Link github</th>
        <th class="border border-slate-300 py-2">Đánh giá</th>
        <th class="border border-slate-300 py-2">Ngôn ngữ làm việc</th>
        <th class="border border-slate-300 py-2">Tuỳ chỉnh</th>
      </tr>
    </thead>
    <tbody class="text-center">
    ${portfolios.map((portfolio,index)=>{
      const getImage = portfolio.images;
      return `
      <tr>
      <td class="border border-slate-300 py-2">${index + 1}</td>
      <td class="border border-slate-300 py-2">${portfolio.name}</td>
      <td class="border border-slate-300 py-2">
        ${getImage.map((images)=> {
          return `
          <img class="w-[100px] h-[100px] object-cover mx-auto py-2" src="${images}" alt=""/>
          `
        }).join("")}
      </td>
      <td class="border border-slate-300 py-2">
        <div class="text-multi">
          ${portfolio.desc}
        </div>
      </td>
      <td class="border border-slate-300 py-2">${portfolio.time}</td>
      <td class="border border-slate-300 py-2">${portfolio.github}</td>
      <td class="border border-slate-300 py-2">${portfolio.feedback}</td>
      <td class="border border-slate-300 py-2">${portfolio.language}</td>
      <td class="border border-slate-300 py-2">
       <button class="mx-4 btnPort-remove" id="" data-id="${portfolio.id}">
        <i class="fas fa-trash-alt text-red-500"></i>
       </button>
       <a href="/admin/portfolio/${portfolio.id}/edit" class="mx-4">
       <i class="fas fa-edit text-blue-500"></i>
       </a>
      </td>
    </tr>
    `
  }).join("")}
    </tbody>
  </table>
  <a href="/admin/portfolio/add">
    <button class="px-5 py-2 bg-blue-500 rounded-md text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 mt-5">Thêm mới</button>
  </a>
</div>
    </div>
    </div>
    `
  )
}

export default PortfolioAdminPage