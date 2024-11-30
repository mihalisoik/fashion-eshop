export let clothes = JSON.parse(localStorage.getItem("clothes")) || [
  {
    id: "A7d2bC9",
    name: "Classic T-Shirt",
    image: "src/assets/images/t-shirt.jpg",
    priceCents: 1999,
    gender: "Unisex",
    category: "T-shirts",
    color: "Red",
    description:
      "A comfortable and versatile t-shirt made from breathable fabric. Designed for casual everyday wear, it is available in a vibrant red color.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 278 },
    stock: {
      S: 50,
      M: 40,
      L: 30,
      XL: 20,
    },
    fitsWith: ["Jackets", "Pants", "Shorts"],
    matchesWithColors: ["White", "Black", "Blue"],
  },
  {
    id: "1v8LpH4",
    name: "Denim Jacket",
    image: "src/assets/images/denim-jacket.jpg",
    priceCents: 4999,
    gender: "Men",
    category: "Jackets",
    color: "Blue",
    description:
      "A durable denim jacket with a classic blue wash. Ideal for layering and casual outings.",
    isFavorite: false,
    rating: { stars: 3.9, reviews: 136 },
    stock: {
      S: 15,
      M: 20,
      L: 25,
      XL: 10,
    },
    fitsWith: ["T-shirts", "Hoodies", "Pants"],
    matchesWithColors: ["White", "Grey", "Black"],
  },
  {
    id: "vG7pFw3",
    name: "Chic Blouse",
    image: "src/assets/images/chic-blouse.jpg",
    priceCents: 2999,
    gender: "Women",
    category: "Blouses",
    color: "White",
    description:
      "An elegant blouse with a clean and polished design. Available in a bright white shade, suitable for both professional and casual settings.",
    isFavorite: false,
    rating: { stars: 4.5, reviews: 412 },
    stock: {
      S: 10,
      M: 15,
      L: 5,
      XL: 8,
    },
    fitsWith: ["Skirts", "Pants"],
    matchesWithColors: ["Black", "Blue", "Red"],
  },
  {
    id: "Yt6pXb2",
    name: "Cargo Pants",
    image: "src/assets/images/cargo-pants.jpg",
    priceCents: 3999,
    gender: "Unisex",
    category: "Pants",
    color: "Olive",
    description:
      "Rugged and functional cargo pants made with durable materials, featuring multiple pockets for added utility. Available in green.",
    isFavorite: false,
    rating: { stars: 3.4, reviews: 89 },
    stock: {
      S: 10,
      M: 10,
      L: 5,
      XL: 0,
    },
    fitsWith: ["T-shirts", "Hoodies"],
    matchesWithColors: ["White", "Black", "Brown"],
  },
  {
    id: "n9P3Wx1",
    name: "Running Sneakers",
    image: "src/assets/images/running-sneakers.jpg",
    priceCents: 10999,
    gender: "Men",
    category: "Shoes",
    color: "Black",
    description:
      "High-performance running sneakers with lightweight cushioning and excellent grip. Available in sleek black.",
    isFavorite: false,
    rating: { stars: 5.0, reviews: 952 },
    stock: {
      32: 5,
      34: 10,
      36: 8,
      38: 7,
      40: 0,
    },
    fitsWith: ["Shorts", "Hoodies"],
    matchesWithColors: ["White", "Grey", "Red"],
  },
  {
    id: "d5zKtY2",
    name: "Leather Boots",
    image: "src/assets/images/leather-boots.jpg",
    priceCents: 8999,
    gender: "Women",
    category: "Shoes",
    color: "Brown",
    description:
      "Sophisticated leather boots crafted for both comfort and style. Available in a rich brown tone.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 220 },
    stock: {
      32: 3,
      34: 5,
      36: 2,
      38: 0,
      40: 5,
    },
    fitsWith: ["Skirts", "Dresses"],
    matchesWithColors: ["Black", "White", "Green"],
  },
  {
    id: "8YbF2V9",
    name: "Casual Dress",
    image: "src/assets/images/casual-dress.jpg",
    priceCents: 5499,
    gender: "Women",
    category: "Dresses",
    color: "Pink",
    description:
      "A relaxed-fit casual dress in a solid pink shade, perfect for summer outings and casual gatherings.",
    isFavorite: false,
    rating: { stars: 3.7, reviews: 134 },
    stock: {
      S: 5,
      M: 4,
      L: 2,
      XL: 1,
    },
    fitsWith: ["Sandals"],
    matchesWithColors: ["White", "Black", "Blue"],
  },
  {
    id: "J0m3QvP",
    name: "Sports Shorts",
    image: "src/assets/images/sports-shorts.jpg",
    priceCents: 2499,
    gender: "Unisex",
    category: "Shorts",
    color: "Grey",
    description:
      "Comfortable and breathable sports shorts designed for maximum mobility. Available in a neutral grey shade.",
    isFavorite: false,
    rating: { stars: 4.6, reviews: 303 },
    stock: {
      S: 10,
      M: 15,
      L: 10,
      XL: 5,
    },
    fitsWith: ["T-shirts", "Sneakers"],
    matchesWithColors: ["Black", "White", "Red"],
  },
  {
    id: "k2CvJb7",
    name: "Wool Sweater",
    image: "src/assets/images/wool-sweater.jpg",
    priceCents: 5999,
    gender: "Men",
    category: "Sweaters",
    color: "Navy",
    description:
      "A cozy and warm wool sweater, crafted for chilly days. Comes in a deep navy blue shade.",
    isFavorite: false,
    rating: { stars: 3.8, reviews: 98 },
    stock: {
      S: 5,
      M: 8,
      L: 5,
      XL: 0,
    },
    fitsWith: ["Pants", "Jackets"],
    matchesWithColors: ["White", "Black", "Grey"],
  },
  {
    id: "Z8w1Ad0",
    name: "Formal Shirt",
    image: "src/assets/images/formal-shirt.jpg",
    priceCents: 3999,
    gender: "Men",
    category: "Shirts",
    color: "White",
    description:
      "A crisp and elegant formal shirt made from high-quality fabric. Available in classic white for professional occasions.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 179 },
    stock: {
      S: 10,
      M: 8,
      L: 4,
      XL: 0,
    },
    fitsWith: ["Pants", "Jackets"],
    matchesWithColors: ["Black", "Blue", "Grey"],
  },
  {
    id: "m7JvK0h",
    name: "Summer Sandals",
    image: "src/assets/images/summer-sandals.jpg",
    priceCents: 2999,
    gender: "Women",
    category: "Shoes",
    color: "Pink",
    description:
      "Lightweight and breathable sandals with a focus on comfort. Available in a soft pink shade.",
    isFavorite: false,
    rating: { stars: 2.8, reviews: 65 },
    stock: {
      32: 0,
      34: 0,
      36: 0,
      38: 12,
      40: 21,
    },
    fitsWith: ["Dresses", "Cover-ups"],
    matchesWithColors: ["White", "Black", "Blue"],
  },
  {
    id: "R1h9Lg3",
    name: "Track Jacket",
    image: "src/assets/images/track-jacket.jpg",
    priceCents: 4499,
    gender: "Unisex",
    category: "Jackets",
    color: "Black",
    description:
      "A modern track jacket with a sleek design and functional features. Available in black.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 312 },
    stock: {
      S: 5,
      M: 5,
      L: 3,
      XL: 2,
    },
    fitsWith: ["Shorts", "Sweatpants"],
    matchesWithColors: ["White", "Grey", "Blue"],
  },
  {
    id: "nV6wRz4",
    name: "Jeans",
    image: "src/assets/images/jeans.jpg",
    priceCents: 6999,
    gender: "Women",
    category: "Pants",
    color: "Navy",
    description:
      "A stylish pair of slim-fit jeans in a dark blue wash, designed for both comfort and style.",
    isFavorite: false,
    rating: { stars: 4.7, reviews: 420 },
    stock: {
      S: 10,
      M: 10,
      L: 10,
      XL: 5,
    },
    fitsWith: ["T-shirts", "Blouses"],
    matchesWithColors: ["White", "Grey", "Pink"],
  },
  {
    id: "d1WqZ8F",
    name: "Jumper",
    image: "src/assets/images/jumper.jpg",
    priceCents: 7999,
    gender: "Unisex",
    category: "Sweaters",
    color: "Grey",
    description:
      "A thick and comfortable jumper, perfect for cooler months. Available in a neutral grey color.",
    isFavorite: false,
    rating: { stars: 3.6, reviews: 120 },
    stock: {
      S: 15,
      M: 20,
      L: 25,
      XL: 10,
    },
    fitsWith: ["Pants", "Jeans"],
    matchesWithColors: ["Black", "White", "Blue"],
  },
  {
    id: "D7pVw1f",
    name: "Varsity Jacket",
    image: "src/assets/images/varsity-jacket.jpg",
    priceCents: 7999,
    gender: "Female",
    category: "Jackets",
    color: "Grey",
    description:
      "A stylish varsity jacket that adds sporty vibes to any look. Available in grey with classic white stripes.",
    isFavorite: false,
    rating: { stars: 4.3, reviews: 112 },
    stock: {
      S: 12,
      M: 15,
      L: 18,
      XL: 10,
    },
    fitsWith: ["T-shirts", "Jeans"],
    matchesWithColors: ["White", "Black", "Red"],
  },
  {
    id: "F3cH9p1",
    name: "Plaid Shirt",
    image: "src/assets/images/plaid-shirt.jpg",
    priceCents: 3599,
    gender: "Men",
    category: "Shirts",
    color: "Red",
    description:
      "A classic plaid shirt that can be worn for both casual and semi-casual occasions.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 221 },
    stock: {
      S: 8,
      M: 14,
      L: 10,
      XL: 7,
    },
    fitsWith: ["Jeans", "Shorts"],
    matchesWithColors: ["Black", "White", "Navy"],
  },
  {
    id: "A2xV6j0",
    name: "Denim Skirt",
    image: "src/assets/images/denim-skirt.jpg",
    priceCents: 2999,
    gender: "Women",
    category: "Skirts",
    color: "Blue",
    description:
      "A timeless denim skirt that pairs well with almost anything. Available in a versatile blue color.",
    isFavorite: false,
    rating: { stars: 4.4, reviews: 130 },
    stock: {
      S: 6,
      M: 10,
      L: 12,
      XL: 5,
    },
    fitsWith: ["T-shirts", "Blouses"],
    matchesWithColors: ["White", "Red", "Pink"],
  },
  {
    id: "Q8oM2i7",
    name: "Leather Jacket",
    image: "src/assets/images/leather-jacket.jpg",
    priceCents: 8999,
    gender: "Unisex",
    category: "Jackets",
    color: "Black",
    description:
      "A sleek black leather jacket that combines style with durability. Perfect for the fall and winter seasons.",
    isFavorite: false,
    rating: { stars: 4.8, reviews: 315 },
    stock: {
      S: 15,
      M: 10,
      L: 8,
      XL: 5,
    },
    fitsWith: ["T-shirts", "Jeans"],
    matchesWithColors: ["White", "Grey", "Red"],
  },
  {
    id: "B1tX8y6",
    name: "Chino Pants",
    image: "src/assets/images/chino-pants.jpg",
    priceCents: 3999,
    gender: "Men",
    category: "Pants",
    color: "Beige",
    description:
      "Chino pants that offer a classic and refined look, perfect for both work and casual outings.",
    isFavorite: false,
    rating: { stars: 4.2, reviews: 157 },
    stock: {
      S: 5,
      M: 8,
      L: 12,
      XL: 10,
    },
    fitsWith: ["T-shirts", "Shirts"],
    matchesWithColors: ["White", "Navy", "Black"],
  },
  {
    id: "T3wO7fP",
    name: "Puffer Vest",
    image: "src/assets/images/puffer-vest.jpg",
    priceCents: 6999,
    gender: "Men",
    category: "Jackets",
    color: "Red",
    description:
      "A puffer vest for extra warmth on cooler days. Lightweight yet warm, in a bold red shade.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 99 },
    stock: {
      S: 8,
      M: 10,
      L: 5,
      XL: 7,
    },
    fitsWith: ["T-shirts", "Hoodies"],
    matchesWithColors: ["Black", "White", "Grey"],
  },
  {
    id: "L2wX9V6",
    name: "Striped Polo Shirt",
    image: "src/assets/images/striped-polo-shirt.jpg",
    priceCents: 3499,
    gender: "Men",
    category: "Shirts",
    color: "Blue",
    description:
      "A classic striped polo shirt with a breathable cotton fabric. Suitable for semi-casual occasions.",
    isFavorite: false,
    rating: { stars: 4.3, reviews: 189 },
    stock: {
      S: 12,
      M: 14,
      L: 8,
      XL: 6,
    },
    fitsWith: ["Pants", "Shorts"],
    matchesWithColors: ["White", "Black", "Grey"],
  },
  {
    id: "N7vY0W5",
    name: "Pleated Skirt",
    image: "src/assets/images/pleated-skirt.jpg",
    priceCents: 2499,
    gender: "Women",
    category: "Skirts",
    color: "Black",
    description:
      "A lightweight pleated skirt that exudes elegance and comfort. Perfect for formal or casual wear.",
    isFavorite: false,
    rating: { stars: 4.5, reviews: 204 },
    stock: {
      S: 10,
      M: 15,
      L: 12,
      XL: 5,
    },
    fitsWith: ["Blouses", "T-shirts"],
    matchesWithColors: ["White", "Pink", "Blue"],
  },
  {
    id: "P3xV7M8",
    name: "Linen Pants",
    image: "src/assets/images/linen-pants.jpg",
    priceCents: 4599,
    gender: "Women",
    category: "Pants",
    color: "Beige",
    description:
      "Soft and lightweight linen pants, perfect for warm weather. Provides a relaxed yet polished look.",
    isFavorite: false,
    rating: { stars: 4.4, reviews: 174 },
    stock: {
      S: 8,
      M: 12,
      L: 6,
      XL: 2,
    },
    fitsWith: ["Blouses", "T-shirts"],
    matchesWithColors: ["White", "Navy", "Green"],
  },
  {
    id: "J2xP9V7",
    name: "Hiking Boots",
    image: "src/assets/images/hiking-boots.jpg",
    priceCents: 10999,
    gender: "Men",
    category: "Shoes",
    color: "Brown",
    description:
      "Durable and weather-resistant hiking boots designed for outdoor adventures. Provides excellent traction.",
    isFavorite: false,
    rating: { stars: 4.7, reviews: 368 },
    stock: {
      32: 6,
      34: 8,
      36: 5,
      38: 4,
      40: 2,
    },
    fitsWith: ["Pants", "Shorts"],
    matchesWithColors: ["Grey", "Green", "Black"],
  },
  {
    id: "V5nX7L4",
    name: "Cropped Hoodie",
    image: "src/assets/images/cropped-hoodie.jpg",
    priceCents: 5999,
    gender: "Women",
    category: "Hoodies",
    color: "Pink",
    description:
      "A trendy cropped hoodie with a relaxed fit. Soft and comfortable, great for casual wear.",
    isFavorite: false,
    rating: { stars: 4.6, reviews: 285 },
    stock: {
      S: 10,
      M: 14,
      L: 8,
      XL: 4,
    },
    fitsWith: ["Pants", "Shorts"],
    matchesWithColors: ["White", "Grey", "Blue"],
  },
  {
    id: "F8xW2L7",
    name: "Knitted Cardigan",
    image: "src/assets/images/knitted-cardigan.jpg",
    priceCents: 7999,
    gender: "Women",
    category: "Sweaters",
    color: "Green",
    description:
      "A warm knitted cardigan that combines comfort with style. Perfect for layering on chilly days.",
    isFavorite: false,
    rating: { stars: 4.1, reviews: 162 },
    stock: {
      S: 6,
      M: 8,
      L: 5,
      XL: 2,
    },
    fitsWith: ["Pants", "Skirts"],
    matchesWithColors: ["White", "Brown", "Navy"],
  },
  {
    id: "T9nV8R2",
    name: "Oversized T-shirt",
    image: "src/assets/images/oversized-t-shirt.jpg",
    priceCents: 2499,
    gender: "Unisex",
    category: "T-shirts",
    color: "Black",
    description:
      "An oversized t-shirt with a minimalist design. Made from soft cotton for ultimate comfort.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 320 },
    stock: {
      S: 12,
      M: 16,
      L: 18,
      XL: 8,
    },
    fitsWith: ["Pants", "Shorts"],
    matchesWithColors: ["White", "Grey", "Blue"],
  },
  {
    id: "M5xV2W4",
    name: "High-Waist Shorts",
    image: "src/assets/images/high-waist-shorts.jpg",
    priceCents: 3199,
    gender: "Women",
    category: "Shorts",
    color: "Blue",
    description:
      "Chic high-waist shorts with a flattering fit. Perfect for summer outings and beachwear.",
    isFavorite: false,
    rating: { stars: 4.2, reviews: 204 },
    stock: {
      S: 8,
      M: 10,
      L: 6,
      XL: 3,
    },
    fitsWith: ["Blouses", "T-shirts"],
    matchesWithColors: ["White", "Pink", "Black"],
  },
  {
    id: "C9xT1Y6",
    name: "Bomber Jacket",
    image: "src/assets/images/bomber-jacket.jpg",
    priceCents: 6999,
    gender: "Unisex",
    category: "Jackets",
    color: "Olive",
    description:
      "A versatile bomber jacket with a sleek design. Lightweight and perfect for layering.",
    isFavorite: false,
    rating: { stars: 4.5, reviews: 180 },
    stock: {
      S: 8,
      M: 10,
      L: 6,
      XL: 5,
    },
    fitsWith: ["T-shirts", "Pants"],
    matchesWithColors: ["Black", "White", "Grey"],
  },
  {
    id: "A7xV4L1",
    name: "Cotton Dress",
    image: "src/assets/images/cotton-dress.jpg",
    priceCents: 4999,
    gender: "Women",
    category: "Dresses",
    color: "Yellow",
    description:
      "A breezy cotton dress with a cheerful yellow shade. Designed for casual summer wear.",
    isFavorite: false,
    rating: { stars: 4.4, reviews: 230 },
    stock: {
      S: 6,
      M: 8,
      L: 4,
      XL: 2,
    },
    fitsWith: ["Sandals"],
    matchesWithColors: ["White", "Beige", "Brown"],
  },
  {
    id: "X1yT9L8",
    name: "Casual Hoodie",
    image: "src/assets/images/casual-hoodie.jpg",
    priceCents: 4599,
    gender: "Unisex",
    category: "Hoodies",
    color: "Beige",
    description:
      "A soft and casual hoodie designed for comfort and style. Perfect for layering during cooler weather.",
    isFavorite: false,
    rating: { stars: 4.3, reviews: 156 },
    stock: {
      S: 12,
      M: 14,
      L: 10,
      XL: 5,
    },
    fitsWith: ["Jeans", "Joggers"],
    matchesWithColors: ["White", "Black", "Green"],
  },
  {
    id: "W2bM6Y3",
    name: "Workout Leggings",
    image: "src/assets/images/workout-leggings.jpg",
    priceCents: 3499,
    gender: "Women",
    category: "Pants",
    color: "Black",
    description:
      "Flexible and moisture-wicking workout leggings perfect for gym sessions or casual wear.",
    isFavorite: false,
    rating: { stars: 4.7, reviews: 210 },
    stock: {
      XS: 20,
      S: 15,
      M: 10,
      L: 5,
    },
    fitsWith: ["T-shirts", "Tank Tops"],
    matchesWithColors: ["Grey", "Pink", "White"],
  },
  {
    id: "R3cX9K5",
    name: "Graphic Tee",
    image: "src/assets/images/graphic-tee.jpg",
    priceCents: 1999,
    gender: "Men",
    category: "T-shirts",
    color: "Yellow",
    description:
      "A bright yellow graphic t-shirt with an eye-catching print. Made with breathable cotton for comfort.",
    isFavorite: false,
    rating: { stars: 4.0, reviews: 134 },
    stock: {
      S: 10,
      M: 15,
      L: 10,
      XL: 8,
    },
    fitsWith: ["Jeans", "Shorts"],
    matchesWithColors: ["Black", "Blue", "White"],
  },
  {
    id: "V4dL7N2",
    name: "Floral Maxi Dress",
    image: "src/assets/images/floral-maxi-dress.jpg",
    priceCents: 7599,
    gender: "Women",
    category: "Dresses",
    color: "Green",
    description:
      "A flowing floral maxi dress perfect for outdoor events and summer days. Features a subtle green base with vibrant floral patterns.",
    isFavorite: false,
    rating: { stars: 4.8, reviews: 320 },
    stock: {
      XS: 8,
      S: 12,
      M: 6,
      L: 4,
    },
    fitsWith: ["Sandals", "Flats"],
    matchesWithColors: ["Pink", "White", "Yellow"],
  },
  {
    id: "T5xL1W8",
    name: "Winter Scarf",
    image: "src/assets/images/winter-scarf.jpg",
    priceCents: 2499,
    gender: "Unisex",
    category: "Accessories",
    color: "Grey",
    description:
      "A warm and cozy winter scarf made with premium wool. Keeps you stylish and protected during chilly days.",
    isFavorite: false,
    rating: { stars: 4.5, reviews: 204 },
    stock: {
      OneSize: 30,
    },
    fitsWith: ["Jackets", "Sweaters"],
    matchesWithColors: ["Black", "Navy", "White"],
  },
  {
    id: "A2xN8L3",
    name: "Printed Joggers",
    image: "src/assets/images/printed-joggers.jpg",
    priceCents: 3999,
    gender: "Men",
    category: "Pants",
    color: "Navy",
    description:
      "Relaxed-fit joggers with an all-over print, combining style and comfort for casual outings.",
    isFavorite: false,
    rating: { stars: 4.2, reviews: 156 },
    stock: {
      S: 10,
      M: 8,
      L: 12,
      XL: 6,
    },
    fitsWith: ["Hoodies", "T-shirts"],
    matchesWithColors: ["White", "Grey", "Black"],
  },
  {
    id: "M5yT7X9",
    name: "Raincoat",
    image: "src/assets/images/raincoat.jpg",
    priceCents: 5299,
    gender: "Unisex",
    category: "Jackets",
    color: "Yellow",
    description:
      "A lightweight and waterproof raincoat, designed to keep you dry during wet weather.",
    isFavorite: false,
    rating: { stars: 4.6, reviews: 189 },
    stock: {
      S: 8,
      M: 10,
      L: 6,
      XL: 3,
    },
    fitsWith: ["Jeans", "Joggers"],
    matchesWithColors: ["Black", "White", "Grey"],
  },
];
