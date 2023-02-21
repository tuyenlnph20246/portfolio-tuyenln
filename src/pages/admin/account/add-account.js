import { addAccount } from "@/api/account";
import sidebar from "@/components/adminComponents/sidebar"
import { useEffect,router } from "@/lib"
const AccountAddPage = () => {
  useEffect(()=>{
    const form = document.querySelector("#accountForm-add");
    const accountName = document.querySelector("#account-name");
    const accountPass = document.querySelector("#account-password");
    const accountEmail = document.querySelector("#account-email");
    form.addEventListener("submit", async(e)=>{
      try {
        e.preventDefault();
        const formAccount = {
          name: accountName.value,
          email: accountEmail.value,
          password: accountPass.value
        }
        await addAccount(formAccount);
        router.navigate("/admin/account")
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
      <h1 class="text-2xl font-medium">Quản lí tài khoản</h1></div>
    <form action="" id="accountForm-add" class="mt-3">
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Tên đăng nhập</label>
      <input type="text" id="account-name" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Email</label>
      <input type="text" id="account-email" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Mật khẩu</label>
      <input type="text" id="account-password" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <button class="px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  text-white transition rounded-md border mt-3 bg-blue-500">Thêm</button>
  </form>
    </div>
  </div>
    `
  )
}

export default AccountAddPage