import { addTestmonial } from "@/api/testmonial";
import sidebar from "@/components/adminComponents/sidebar";
import { useEffect, router } from "@/lib";
import uploadFiles from "@/api/uploadimage";
const TestmonialAdminAddPage = () => {
  useEffect(() => {
    const formTest = document.querySelector("#testForm-add");
    const testName = document.querySelector("#test-name");
    const testImages = document.getElementById("test-image");
    const testEmail = document.querySelector("#test-email");
    const testTime = document.querySelector("#test-time");
    const testNote = document.querySelector("#test-note");
    formTest.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();
        const urls = await uploadFiles(testImages.files);
        const formTest = {
          name: testName.value,
          images: urls,
          email: testEmail.value,
          time: testTime.value,
          note: testNote.value,
        };
        await addTestmonial(formTest);
        router.navigate("/admin/testmonial")
      } catch (error) {
        console.log(error)
      }
    });
  });
  return `
    <div class="container mx-auto w4/5 flex border">
    ${sidebar()}
    <div class="grow p-2">
    <div className="">
      <h1 class="text-2xl font-medium">Quản lí Feedback</h1></div>
    <form action="" id="testForm-add" class="mt-3">
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Tên khách hàng</label>
      <input type="text" id="test-name" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3">
      <label for="" class="text-xl">Ảnh khách hàng</label>
      <input type="file" id="test-image" class="file:px-5 file:rounded-lg file:border-none border py-2 px-1 rounded-md focus:outline-none file:text-sm file:py-2 file:font-semibold file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Email khách hàng</label>
      <input type="Email" id="test-email" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Ngày giờ</label>
      <input type="date" id="test-time" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
    </div>
    <div class="flex flex-col gap-3 mt-3">
      <label for="" class="text-xl">Nội dung đánh giá</label>
      <textarea name="" id="test-note" cols="30" rows="5" class="border py-2 px-1 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></textarea>
    </div>
    <button class=" px-5 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  text-white transition rounded-md border mt-3 bg-blue-500">Thêm</button>
  </form>
    </div>
  </div>
    `;
};

export default TestmonialAdminAddPage;
