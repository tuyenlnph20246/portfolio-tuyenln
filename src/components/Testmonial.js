import { useEffect,useState } from "@/lib";
import { getTestmonials } from "@/api/testmonial";
import $ from 'jquery';
import 'slick-carousel';
const Testmonial = () => {
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
  useEffect(() => {
    $(`.Item-slick`).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: true,
    });
  });
  return `
  <section class="p-5 h-[100vh]" id="testmonial">
  <div class="flex flex-col gap-y-6 items-center my-6">
    <div class="text-3xl text-gray-400">Testmonial</div>
    <div class="text-3xl font-medium">What People Say About Me</div>
    <div class="w-[50vw] text-center">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
      excepturi qui sit veritatis assumenda voluptas ullam quae! Autem
      officia, veniam quasi repellat saepe sunt culpa veritatis
      aspernatur amet, quisquam earum?
    </div>
  </div>
  <!-- Item slick -->
  <div class="Item-slick">
    ${testmonials.map((test)=>{
      return `
      <div class="rounded-2xl p-3 slick-children border">
      <div className="">
        <img
          src="${test.images}"
          alt=""
          class="w-[200px] h-[200px] object-cover rounded-[100%]"
        />
      </div>
      <div class="text-center my-2">
        <p class="text-2xl font-medium">${test.name}</p>
        <p class="text-[#7F8487]">${test.time}</p>
      </div>
      <div class="text-center">
        ${test.note}
      </div>
      </div>
      `
    }).join("")}
  <!-- End Item slick -->
</section>
    `;
};

export default Testmonial;
