const products = [
  // MEN
  {
    id: 1,
    title: "Men Slim Fit Shirt",
    category: "Men",
    price: 1999,
    originalPrice: 2999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 2,
    title: "Men Casual Jacket",
    category: "Men",
    price: 3499,
    originalPrice: 5499,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 3,
    title: "Men Denim Jeans",
    category: "Men",
    price: 2499,
    originalPrice: 3999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 4,
    title: "Men Hoodie",
    category: "Men",
    price: 2199,
    originalPrice: 3299,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1618354691229-c19e3d9b3f7c?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 5,
    title: "Men Sneakers",
    category: "Men",
    price: 4999,
    originalPrice: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=70",
  },

  // WOMEN
  {
    id: 6,
    title: "Women Floral Dress",
    category: "Women",
    price: 2799,
    originalPrice: 4499,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 7,
    title: "Women Stylish Top",
    category: "Women",
    price: 1599,
    originalPrice: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1593032465171-8fdf42c00e63?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 8,
    title: "Women Blazer",
    category: "Women",
    price: 3999,
    originalPrice: 6499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 9,
    title: "Women Handbag",
    category: "Women",
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 10,
    title: "Women Heels",
    category: "Women",
    price: 3499,
    originalPrice: 5999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=70",
  },

  // SPORTS
  {
    id: 11,
    title: "Sports Running Shoes",
    category: "Sports",
    price: 5999,
    originalPrice: 8999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 12,
    title: "Sports Track Pants",
    category: "Sports",
    price: 1899,
    originalPrice: 2999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 13,
    title: "Gym T-Shirt",
    category: "Sports",
    price: 1299,
    originalPrice: 1999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 14,
    title: "Sports Jacket",
    category: "Sports",
    price: 4599,
    originalPrice: 6999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 15,
    title: "Gym Backpack",
    category: "Sports",
    price: 2499,
    originalPrice: 3999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231693?w=600&auto=format&fit=crop&q=70",
  },

  // SHOES
  {
    id: 16,
    title: "Classic White Sneakers",
    category: "Shoes",
    price: 4299,
    originalPrice: 6499,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 17,
    title: "Leather Formal Shoes",
    category: "Shoes",
    price: 5499,
    originalPrice: 8499,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 18,
    title: "Canvas Slip-On",
    category: "Shoes",
    price: 1999,
    originalPrice: 2999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 19,
    title: "Running Shoes Pro",
    category: "Shoes",
    price: 6999,
    originalPrice: 9999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 20,
    title: "Casual Loafers",
    category: "Shoes",
    price: 3299,
    originalPrice: 4999,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&auto=format&fit=crop&q=70",
  },

  // ACCESSORIES
  {
    id: 21,
    title: "Leather Belt",
    category: "Accessories",
    price: 999,
    originalPrice: 1599,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583c2?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 22,
    title: "Sunglasses Classic",
    category: "Accessories",
    price: 2499,
    originalPrice: 3999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 23,
    title: "Premium Watch",
    category: "Accessories",
    price: 8999,
    originalPrice: 12999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 24,
    title: "Canvas Backpack",
    category: "Accessories",
    price: 2799,
    originalPrice: 4299,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=70",
  },
  {
    id: 25,
    title: "Wool Cap",
    category: "Accessories",
    price: 799,
    originalPrice: 1299,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=70",
  },
];

export default products;
