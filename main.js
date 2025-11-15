const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const Cards = [
  {
    name: "Richards Mills",
    position: "Sales Consultant",
    image: "./image/Team-image/asset 15.jpeg",
  },
  {
    name: "Mike Husseys",
    position: "Founder, CEO",
    image: "./image/Team-image/asset 16.jpeg",
  },
  {
    name: "Jenilia D’sosa ",
    position: "Marketing Lead",
    image: "./image/Team-image/asset 17.jpeg",
  },
  {
    name: "David Warner ",
    position: "SEO Analyst",
    image: "./image/Team-image/asset 18.jpeg",
  },
];


const Card2 = [
  {
    image: "./image/Service-image/asset 9.jpeg",
    service: "Business Services",
    description: "The tiny ship today stille",
    More: "READ MORE>"
  },
  {
    image: "./image/Service-image/asset 10.jpeg",
    service: "Business Services",
    description: "The tiny ship today stille",
    More: "READ MORE>"
  },
  {
    image: "./image/Service-image/asset 11.jpeg",
    service: "Business Services",
    description: "The tiny ship today stille",
    More: "READ MORE>"
  },
  {
    image: "./image/Service-image/asset 12.jpeg",
    service: "Business Services",
    description: "The tiny ship today stille",
    More: "READ MORE>"
  },
  {
    image: "./image/Service-image/asset 13.jpeg",
    service: "Business Services",
    description: "The tiny ship today stille",
    More: "READ MORE>"
  },
  {
    image: "./image/Service-image/asset 14.jpeg",
    service: "Business Services",
    description: "The tiny ship today stille",
    More: "READ MORE>"
  },
]

console.log(Card2)



const serverce = document.getElementById("serverce");
const Products = document.getElementById("Products");

const ShowProduct = () => {
  Cards.map((product) => {
    const ProductHtml = `<div
            class="shadow hover:shadow-lg pb-[12px] text-center cursor-pointer"
          >
            <img class="w-full" src="${product.image}" alt="" />
            <h2 class="pt-4 text-xl font-medium text-gray-800">
             ${product.name}
            </h2>
            <p class="text-gray-500 italic">${product.position}</p>
          </div>`;

    Products.innerHTML += ProductHtml;
  });


  Card2.map((product)=>{
    const ProduHtml = ` <div
          id="card"
          class="flex gap-5 bg-white shadow hover:shadow-lg cursor-pointer rounded-lg transition"
        >
          <img
            src="${product.image}"
            class="h-full object-cover"
            alt=""
          />
          <div class="flex flex-col gap-5 justify-center">
            <div>
              <h1 class="text-[24px] font-medium">${product.service}</h1>
              <h2 class="text-[18px] text-[#555555]">
                ${product.description}
              </h2>
            </div>
            <a class="text-[#001A57] font-medium" href="#">${product.More} </a>
          </div>
        </div>`;

        serverce.innerHTML+=ProduHtml;
  })
};

ShowProduct();

















//  <div
//           id="card"
//           class="flex gap-5 bg-white shadow hover:shadow-lg cursor-pointer rounded-lg transition"
//         >
//           <img
//             src="./image/Service-image/asset 9.jpeg"
//             class="h-full object-cover"
//             alt=""
//           />
//           <div class="flex flex-col gap-5 justify-center">
//             <div>
//               <h1 class="text-[24px] font-medium">Business Services</h1>
//               <h2 class="text-[18px] text-[#555555]">
//                 The tiny ship today stille
//               </h2>
//             </div>
//             <a class="text-[#001A57] font-medium" href="#">READ MORE> </a>
//           </div>
//         </div>