import { getPortfolios } from "@/api/portfolio";
import { useEffect, useState } from "@/lib";

const Portfolio = () => {
  const [portfolios, setPortfolio] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setPortfolio(await getPortfolios());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return `
    <section class="p-5" id="portfolio">
    <div class="flex flex-col gap-y-6 items-center my-6">
      <div class="text-3xl text-gray-400">Portfolio</div>
      <div class="text-3xl font-medium">Check My Wonderful Works</div>
      <div class="w-[50vw] text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem omnis nihil quo impedit optio dolorem, minus, autem architecto nisi aspernatur vitae sequi iste ducimus exercitationem reiciendis. Consequatur omnis sint dolor.
      </div>
    </div>
    <!-- Item Portfolio -->
    <div class="grid grid-cols-4 gap-x-6">
    ${portfolios
      .map((portfolio) => {
        return `
      <div class="bg-[#ffffff4D] p-2 rounded-lg shadow-xl flex flex-col gap-y-3">
      <div class="">
       <img src="${portfolio.images}" alt="" class="rounded-2xl">
      </div>
       <div class=" rounded-2xl">
          <p class="text-xl py-3 font-medium">${portfolio.name}</p>
         <p class="text-multi">${portfolio.desc}</p>
         <div class="flex justify-between mt-3">
           <p>${portfolio.language}</p>
           <p>${portfolio.feedback}</p>
         </div>
         <div class="mt-3">
           <a href="${portfolio.github}">
             <button class="text-white py-2 px-5 bg-orange-400 rounded-lg">Git hub</button>
           </a>
         </div>
       </div>
     </div>
      `;
      })
      .join("")}
    </div>
    <!-- End Item Portfolio -->
  </section>
    `;
};

export default Portfolio;
