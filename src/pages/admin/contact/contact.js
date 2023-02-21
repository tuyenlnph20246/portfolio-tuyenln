import { deleteContact, getContacts } from "@/api/contact";
import sidebar from "@/components/adminComponents/sidebar";
import { useEffect, useState } from "@/lib";
const ContactAdminPage = () => {
  const [contacts,setContact] = useState([]);
  useEffect(()=>{
    (async ()=>{
      try {
        setContact(await getContacts())
      } catch (error) {
        console.log(error)
      }
    })()
  },[]);
  useEffect(()=>{
    const btnContact = document.querySelectorAll(".btnContact-remove");
    for(let btn of btnContact){
      btn.addEventListener("click" ,async(e)=>{
        try {
          e.preventDefault()
          const id = btn.dataset.id;
          const confirm = window.confirm("Bạn có muốn xóa không?");
          if(confirm){
            deleteContact(id).then(()=>{
              const newContact = contacts.filter((contact)=> contact.id != id);
              setContact(newContact);
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
        <th class="border border-slate-300 py-2">Tên người dùng</th>
        <th class="border border-slate-300 py-2">Email người dùng</th>
        <th class="border border-slate-300 py-2">Nôị dung liên hệ</th>
        <th class="border border-slate-300 py-2">Tuỳ chỉnh</th>
      </tr>
    </thead>
    <tbody class="text-center">
    ${contacts.map((contact,index)=>{
      return `
      <tr>
      <td class="border border-slate-300 py-2">${index + 1}</td>
      <td class="border border-slate-300 py-2">${contact.name}</td>
      <td class="border border-slate-300 py-2">${contact.email}</td>
      <td class="border border-slate-300 py-2">${contact.note}</td>
      <td class="border border-slate-300 py-2">
       <button class="mx-4 btnContact-remove" id="" data-id="${contact.id}">
        <i class="fas fa-trash-alt text-red-500"></i>
       </button>
       <a href="/admin/contact/${contact.id}/edit" class="mx-4">
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

export default ContactAdminPage