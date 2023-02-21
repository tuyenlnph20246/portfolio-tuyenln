import { getTestmonial, updateTestmonial } from "@/api/testmonial";
import sidebar from "@/components/adminComponents/sidebar";
import { useEffect, useState, router } from "@/lib";
import uploadFiles from "@/api/uploadimage";
const TestmonialAdminEditPage = ({id}) => {
  const [testmonial, setTestmonial] = useState({});
  console.log(testmonial)
  useEffect(()=>{
    (async ()=>{
      try {
        setTestmonial(await getTestmonial(id))
      } catch (error) {
        console.log(error)
      }
    })()
  },[]);
  useEffect(()=>{
    const formTest = document.querySelector("#testForm-edit");
    const testName = document.querySelector("#testEdit-name");
    const testImages = document.getElementById("testEdit-image");
    const testEmail = document.querySelector("#testEdit-email");
    const testTime = document.querySelector("#testEdit-time");
    const testNote = document.querySelector("#testEdit-note");
   formTest.addEventListener("submit", async(e)=>{
    try {
      e.preventDefault();
      const urlsEdit = await uploadFiles(testImages.files);
      const formData = {
        id,
        name: testName.value,
        images: urlsEdit,
        email: testEmail.value,
        time: testTime.value,
        note: testNote.value,
      }
      await updateTestmonial(formData);
      router.navigate("/admin/testmonial");
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
      <h1 class="text-2xl font-medium">Quản lí Feedback</h1></div>
    <form action="" id="testForm-edit" class="mt-3">
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Tên khách hàng</label>
      <input type="text" id="testEdit-name" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value="${testmonial.name}">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Ảnh khách hàng</label>
      <img class="w-[100px] h-[100px] object-cover mt-3" src="${testmonial.images}" alt="" />
      <input type="file" id="testEdit-image" class="file:px-5 file:rounded-lg file:border-none border py-2 px-1 rounded-md focus:outline-none file:text-sm file:py-2 file:font-semibold file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Email khách hàng</label>
      <input type="Email" id="testEdit-email" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" value="${testmonial.email}">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Ngày giờ</label>
      <div class="">${testmonial.time}</div>
      <input type="date" id="testEdit-time" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Nội dung đánh giá</label>
      <textarea  name="" id="testEdit-note" cols="30" rows="5" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">${testmonial.note}</textarea>
    </div>
    <button class=" px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  text-white transition rounded-md border mt-3 bg-blue-500">Cập Nhật</button>
  </form>
    </div>
  </div>
    `
  )
}

export default TestmonialAdminEditPage