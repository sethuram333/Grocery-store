const product = [
  {
    id: 1,
    title: "Apple",
    price: "50",
    category: "Fruits",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/download.jpeg",
  },
  {
    id: 2,
    title: "Banana",
    category: "Fruits",
    price: "25",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/download%20(2).jpeg",
  },
  {
    id: 3,
    title: "Grapes",
    category: "Fruits",
    price: "75",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/download%20(1).jpeg",
  },
  {
    id: 4,
    title: "Orange",
    category: "Fruits",
    price: "55",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/orange.jpg",
  },
  {
    id: 5,
    title: "strawberry",
    category: "Fruits",
    price: "100",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/strawberry.jpeg",
  },
  {
    id: 6,
    title: "pine apple",
    category: "Fruits",
    price: "60",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/WhatsApp%20Image%202025-10-31%20at%203.55.05%20PM%20(2).jpeg",
  },
  {
    id: 7,
    title: "Guava",
    category: "Fruits",
    price: "45",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/WhatsApp%20Image%202025-10-31%20at%203.55.05%20PM.jpeg",
  },
  {
    id: 8,
    title: "Mango",
    category: "Fruits",
    price: "35",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/WhatsApp%20Image%202025-10-31%20at%203.55.06%20PM.jpeg",
  },
  //   Meat
  {
    id: 9,
    title: "Chicken",
    category: "Meat",
    price: "120",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/Raw%20chicken%20fillets%20close%20up%20isolated%20without_.jpeg",
  },
  {
    id: 10,
    title: "Beaf",
    category: "Meat",
    price: "250",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meat.jpg?updatedAt=1759396791927",
  },
  {
    id: 11,
    title: "Mutton",
    category: "Meat",
    price: "700",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%205.25.33%20PM.jpeg",
  },
  {
    id: 12,
    title: "Fish",
    category: "Meat",
    price: "100",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%205.25.33%20PM%20(1).jpeg",
  },
  {
    id: 13,
    title: "Rabbit Meat",

    category: "Meat",
    price: "120",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.29%20PM.jpeg",
  },
  {
    id: 14,
    title: "Squid",
    category: "Meat",
    price: "240",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.29%20PM%20(1).jpeg",
  },
  {
    id: 15,
    title: "Crab",
    category: "Meat",
    price: "200",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.30%20PM%20(1).jpeg",
  },
  {
    id: 16,
    title: "Prawn",
    category: "Meat",
    price: "150",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.30%20PM.jpeg",
  },
  //   veggies
  {
    id: 17,
    title: "Tomato",
    category: "Vegetables",
    price: "25",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/download%20(3).jpeg",
  },
  {
    id: 18,
    title: "Potato",
    category: "Vegetables",
    price: "30",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/download%20(4).jpeg",
  },
  {
    id: 19,
    title: "Ladies Finger",
    category: "Vegetables",
    price: "32",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/download%20(5).jpeg?updatedAt=1759499563513",
  },
  {
    id: 20,
    title: "Onion",
    category: "Vegetables",
    price: "45",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%205.20.14%20PM.jpeg",
  },
  {
    id: 21,
    title: "Cauli Flower",
    category: "Vegetables",
    price: "40",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.55%20PM%20(1).jpeg",
  },
  {
    id: 22,
    title: "Brinjal",
    category: "Vegetables",
    price: "53",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.55%20PM.jpeg",
  },
  {
    id: 23,
    title: "Carrot",
    category: "Vegetables",
    price: "64",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.56%20PM%20(1).jpeg",
  },
  {
    id: 24,
    title: "Beetroot",
    category: "Vegetables",
    price: "56",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.56%20PM.jpeg",
  },
  //   dairy
  {
    id: 25,
    title: "Milk",
    category: "Dairy",
    price: "40",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/AI%20Emoji%20Generator.jpeg",
  },
  {
    id: 26,
    title: "Paneer",
    category: "Dairy",
    price: "50",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/Paneer%20Cheese%20Cubes%20On%20A%20Plate%20Transparent%20Background,%20Paneer,%20Cheese,%20Cubes%20PNG%20Transparent%20Image%20and%20Clipart%20for%20Free%20Download.jpeg",
  },
  {
    id: 27,
    title: "Cheese",

    category: "Dairy",
    price: "30",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/658d3afd-8cc4-432a-bd66-ff2fb44e2b62.jpeg",
  },
  {
    id: 28,
    title: "Butter",
    category: "Dairy",
    price: "57",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/b9e92e01-7f9c-44be-b321-8e397442a15e.jpeg",
  },
  {
    id: 29,
    title: "Yogurd",
    category: "Dairy",
    price: "87",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.54%20PM%20(1).jpeg",
  },
  {
    id: 30,
    title: "Ghee",

    category: "Dairy",
    price: "55",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.54%20PM%20(2).jpeg",
  },
  {
    id: 31,
    title: "Curd",
    category: "Dairy",
    price: "15",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.54%20PM.jpeg",
  },
  {
    id: 32,
    title: "Egg",
    category: "Dairy",
    price: "32",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.55%20PM.jpeg",
  },
];

export default product;
