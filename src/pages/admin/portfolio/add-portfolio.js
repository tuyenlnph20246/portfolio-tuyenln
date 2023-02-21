import { addPortfolio } from "@/api/portfolio";
import uploadFiles from "@/api/uploadimage";
import sidebar from "@/components/adminComponents/sidebar";
import { router, useEffect } from "@/lib";
const PortfolioAdminAddPage = () => {
  useEffect(()=>{
   const formPort = document.getElementById("projectForm-add");
   const proName = document.getElementById("project-name");
   const proImages = document.getElementById("project-image");
   const proDesc = document.getElementById("project-desc");
   const proTime = document.getElementById("project-time");
   const proGit = document.getElementById("project-github");
   const proFeedback = document.getElementById("project-feedback");
   const proLanguage = document.getElementById("project-language");
   formPort.addEventListener("submit",async (e)=>{
    try {
      e.preventDefault();
      const urls = await uploadFiles(proImages.files);
      const formData = {
        name: proName.value,
        images: urls,
        desc: proDesc.value,
        time: proTime.value ,
        github: proGit.value,
        feedback: proFeedback.value,
        language: proLanguage.value,
      }
      await addPortfolio(formData);
      router.navigate("/admin/portfolio");
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
      <h1 class="text-2xl font-medium">Quản lí dự án</h1></div>
    <form action="" id="projectForm-add" class="mt-3">
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Tên dự án</label>
      <input type="text" id="project-name" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Ảnh dự án</label>
      <input multiple type="file" id="project-image" class="file:px-5 file:rounded-lg file:border-none border py-2 px-1 rounded-md focus:outline-none file:text-sm file:py-2 file:font-semibold file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Mô tả dự án</label>
      <input type="text" id="project-desc" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Thời gian làm</label>
      <input type="text" id="project-time" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Link git hub</label>
      <input type="text" id="project-github" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Đánh giá</label>
      <input type="text" id="project-feedback" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Ngôn ngữ làm việc</label>
      <input type="text" id="project-language" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <button class=" px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  text-white transition rounded-md border mt-3 bg-blue-500">Thêm</button>
  </form>
    </div>
  </div>
    `
  )
}

export default PortfolioAdminAddPage