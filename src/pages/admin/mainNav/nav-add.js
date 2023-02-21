import sidebar from "@/components/adminComponents/sidebar";
import { addNavs } from "@/api/navs";
import { useEffect, router } from "@/lib";
const NavAdminAddPage = () => {
  useEffect(()=>{

    const form = document.querySelector("#NavForm-add");
    const navName = document.querySelector("#nav-name");
    const navLink = document.querySelector("#nav-link");
    form.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();
        const formDataNavs = {
          name: navName.value,
          link: navLink.value
        }
       await addNavs(formDataNavs);
       router.navigate("/admin/navs");
      } catch (error) {
        console.log(error)
      }
    })
  })

  return `
    <div class="container mx-auto w4/5 flex border">
      ${sidebar()}
      <div class="grow p-2">
      <div className="">
        <h1 class="text-2xl font-medium">Quản lí menu</h1></div>
      <form action="" id="NavForm-add" class="mt-3">
      <div class="flex flex-col gap-3">
        <label for="" class="text-xl">Tên menu</label>
        <input type="text" id="nav-name" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
      </div>
      <div class="flex flex-col gap-3">
        <label for="" class="text-xl">Link menu</label>
        <input type="text" id="nav-link" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
      </div>
      <button class="px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white transition rounded-md border bg-blue-500 mt-3">Thêm</button>
    </form>
      </div>
    </div>
    `;
};

export default NavAdminAddPage;
