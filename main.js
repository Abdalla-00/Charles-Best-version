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
};

ShowProduct();
