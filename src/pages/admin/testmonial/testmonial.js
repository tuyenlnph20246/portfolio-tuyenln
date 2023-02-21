import { deleteTestmonial, getTestmonials } from "@/api/testmonial";
import sidebar from "@/components/adminComponents/sidebar"
import { useEffect, useState } from "@/lib"
const TestmonialAdminPage = () => {
  const [testmonials, setTestmonial] = useState([]);
  useEffect(()=>{
    (async ()=>{
      try {
        setTestmonial(await getTestmonials())
      } catch (error) {
        console.log(error)
      }
    })()
  },[]);
  useEffect(()=>{
    const btnTest = document.querySelectorAll(".btnTestmonial-remove");
    for (let btn of btnTest){
      btn.addEventListener("click", async()=>{
        try {
          const id = btn.dataset.id;
          const confirm = window.confirm("Bạn có muốn xóa không?");
          if(confirm){
            deleteTestmonial(id)
            .then(()=>{
              const newTest = testmonials.filter((test)=> test.id != id);
              setTestmonial(newTest);
            })
          }
        } catch (error) {
          console.log(error);
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
    <h1 class="text-2xl font-medium">Quản lí Feedback</h1>
  <table class="border-collapse border border-slate-300 w-full mt-3">
    <thead>
      <tr>
        <th class="border border-slate-300 py-2">STT</th>
        <th class="border border-slate-300 py-2">Tên khách hàng</th>
        <th class="border border-slate-300 py-2">Ảnh khách hàng</th>
        <th class="border border-slate-300 py-2">Email khách hàng</th>
        <th class="border border-slate-300 py-2">Ngày giờ</th>
        <th class="border border-slate-300 py-2">Nội dung đánh giá</th>
        <th class="border border-slate-300 py-2">Tùy chỉnh</th>
      </tr>
    </thead>
    <tbody class="text-center">
    ${testmonials.map((testmonial,index)=>{
      return `
      <tr>
      <td class="border border-slate-300 py-2">${index + 1}</td>
      <td class="border border-slate-300 py-2">${testmonial.name}</td>
      <td class="border border-slate-300 py-2"><img class="w-[100px] h-[100px] object-cover mx-auto py-2" src="${testmonial.images}" alt=""/></td>
      <td class="border border-slate-300 py-2">${testmonial.email}</td>
      <td class="border border-slate-300 py-2">${testmonial.time}</td>
      <td class="border border-slate-300 py-2"><div class="text-multi">${testmonial.note}</div></td>
      <td class="border border-slate-300 py-2">
       <button class="mx-4 btnTestmonial-remove" id="" data-id="${testmonial.id}">
        <i class="fas fa-trash-alt text-red-500"></i>
       </button>
       <a href="/admin/testmonial/${testmonial.id}/edit" class="mx-4">
       <i class="fas fa-edit text-blue-500"></i>
       </a>
      </td>
    </tr>
    `
  }).join("")}
    </tbody>
  </table>
  <a href="/admin/testmonial/add">
    <button class="px-5 py-2 bg-blue-500 rounded-md text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 mt-5">Thêm mới</button>
  </a>
</div>
    </div>
    </div>
    `
  )
}

export default TestmonialAdminPage