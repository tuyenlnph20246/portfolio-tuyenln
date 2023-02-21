import { addContact } from "@/api/contact";
import { router, useEffect } from "@/lib"

const Contact = () => {
  useEffect(()=>{
    const formContact = document.getElementById("formContact");
    const NameContact = document.getElementById("name-Contact");
    const emailContact = document.getElementById("email-Contact");
    const noteContact = document.getElementById("note-Contact");
    formContact.addEventListener("submit", async(e)=>{
      try {
        e.preventDefault();
        const formData ={
          name: NameContact.value ,
          email: emailContact.value ,
          note: noteContact.value ,
        }
        await addContact(formData);
        router.navigate("/")
      } catch (error) {
        console.log(error)
      }
    })
  })
  return (
    `
    <section class="p-8 flex flex-col gap-y-12" id="contact">
        <div class="flex flex-col gap-y-6 items-center my-6">
          <div class="text-3xl text-gray-400">Contact For Me</div>
        </div>
        <div class="grid grid-cols-2 gap-x-12">
          <div class="bg-[#ffffff66] h-[500px] p-6 rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1675722132184-3984d48c8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt=""
              class="h-full w-full object-cover rounded-2xl -translate-x-12 -translate-y-12"
            />
          </div>
          <!-- Form contact -->
          <div class="bg-[#ffffff66] p-3 rounded-2xl shadow-lg">
            <form
              id="formContact"
              action=""
              class="flex flex-col gap-y-6 justify-between w-3/4 mx-auto"
            >
              <div class="flex flex-col gap-y-5">
                <label for="">Name</label>
                <input
                  id="name-Contact"
                  type="text"
                  class="py-2 pl-2 rounded-lg border shadow-lg focus:outline-none focus:border-[#F2921D] focus:ring-1 focus:ring-[#F2921D]"
                />
              </div>
              <div class="flex flex-col gap-y-5">
                <label for="">Email</label>
                <input
                  id="email-Contact"
                  type="email"
                  class="py-2 pl-2 rounded-lg border shadow-lg focus:outline-none focus:border-[#F2921D] focus:ring-1 focus:ring-[#F2921D]"
                />
              </div>
              <div class="flex flex-col gap-y-5">
                <label for="">Content</label>
                <textarea
                  name=""
                  id="note-Contact"
                  cols="30"
                  rows="5"
                  class="py-2 pl-2 rounded-lg border shadow-lg focus:outline-none focus:border-[#F2921D] focus:ring-1 focus:ring-[#F2921D]"
                ></textarea>
              </div>
              <div class="">
                <button class="py-2 px-8 bg-[#F2921D] rounded-2xl text-white">
                  Send
                </button>
              </div>
            </form>
          </div>
          <!-- End form contact -->
        </div>
      </section>`
  )
}

export default Contact