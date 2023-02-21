import { deleteAccount, getAccounts } from "@/api/account";
import sidebar from "@/components/adminComponents/sidebar"
import { useEffect, useState } from "@/lib"
const AccountAdminPage = () => {
  const [accounts, setAccount] = useState([]);
  useEffect(()=>{
    (async ()=>{
      try {
        setAccount(await getAccounts())
      } catch (error) {
        console.log(error)
      }
    })();
  },[]);
  useEffect(()=>{
    const btnAccount = document.querySelectorAll(".btnAccount-remove");
    for(let btn of btnAccount){
      btn.addEventListener("click", async ()=>{
        try {
          const id = btn.dataset.id;
          const confirm = window.confirm("Bạn có muốn xóa không ?")
          if (confirm){
            deleteAccount(id)
            .then(()=>{
              const newAccount= accounts.filter((account)=> account.id != id);
              setAccount(newAccount)
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
    <h1 class="text-2xl font-medium">Quản lí tài khoản</h1>
  <table class="border-collapse border border-slate-300 w-full mt-3">
    <thead>
      <tr>
        <th class="border border-slate-300 py-2">STT</th>
        <th class="border border-slate-300 py-2">Tên đăng nhập</th>
        <th class="border border-slate-300 py-2">Email</th>
        <th class="border border-slate-300 py-2">Mật khẩu</th>
        <th class="border border-slate-300 py-2">Tùy chỉnh</th>
      </tr>
    </thead>
    <tbody class="text-center">
    ${accounts.map((account,index)=>{
      return `
      <tr>
      <td class="border border-slate-300 py-2">${index + 1}</td>
      <td class="border border-slate-300 py-2">${account.name}</td>
      <td class="border border-slate-300 py-2">${account.email}</td>
      <td class="border border-slate-300 py-2">${account.password}</td>
      <td class="border border-slate-300 py-2">
       <button class="mx-4 btnAccount-remove" id="" data-id="${account.id}">
        <i class="fas fa-trash-alt text-red-500"></i>
       </button>
       <a href="/admin/account/${account.id}" class="mx-4">
       <i class="fas fa-edit text-blue-500"></i>
       </a>
      </td>
    </tr>
    `
  }).join("")}
    </tbody>
  </table>
  <a href="/admin/account/add">
    <button class="px-5 py-2 bg-blue-500 rounded-md text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 mt-5">Thêm mới</button>
  </a>
</div>
    </div>
  </div>
    `
  )
}

export default AccountAdminPage