
const Service = () => {
  return (
    `
    <section class="p-5 h-[80vh]" id="service">
    <div class="flex flex-col gap-y-6 items-center my-6">
      <div class="text-3xl text-gray-400">Service</div>
      <div class="text-3xl font-medium">What I Do</div>
      <div class="w-[50vw] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis veniam perspiciatis culpa mollitia, nemo iste aliquid autem numquam vero deserunt corrupti odit quos accusamus adipisci alias expedita impedit quas.</div>
    </div>
    <div class="grid grid-cols-4 gap-x-12 text-center item-service-mother">
      <!-- Item Service -->
      <div class="border-2 border-gray-300 p-12 flex flex-col gap-y-6 shadow-lg item-service-children1">
        <div class="">
          <i class="fas fa-crown text-2xl"></i>
        </div>
        <div class="">
          UX/UI Design
        </div>
      </div>
      <div class="border-2 border-gray-300 p-12 flex flex-col gap-y-6 shadow-lg item-service-children2">
        <div class="">
          <i class="fas fa-desktop text-2xl"></i>
        </div>
        <div class="">
          Web Design
        </div>
      </div>
      <div class="border-2 border-gray-300 p-12 flex flex-col gap-y-6 shadow-lg item-service-children3">
        <div class="">
          <i class="fas fa-mobile-android-alt text-2xl"></i>
        </div>
        <div class="">
          App Design
        </div>
      </div>
      <div class="border-2 border-gray-300 p-12 flex flex-col gap-y-6 shadow-lg item-service-children4">
        <div class="">
          <i class="fas fa-signal text-2xl"></i>
        </div>
        <div class="">
          SEO
        </div>
      </div>
      <!-- End Item Service -->
    </div>
  </section>
    `
  )
}

export default Service