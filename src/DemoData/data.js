

// const product=[
//     {
//       name: "Apple iPhone 15 Pro",
//       description: "The latest iPhone with a titanium frame, A17 Pro chip, and a 48MP camera.",
//       price: 999,
//       image: "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4"
//     },
//     {
//       name: "Samsung Galaxy S23 Ultra",
//       description: "A powerful Android flagship with a 200MP camera, Snapdragon 8 Gen 2, and S-Pen.",
//       price: 1199,
//       image: "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back.jpg?imbypass=true"
//     },
//     {
//       name: "Sony WH-1000XM5 Headphones",
//       description: "Noise-canceling wireless headphones with superior sound quality.",
//       price: 399,
//       image: "https://www.sony.co.in/electronics/headband-headphones/wh-1000xm5"
//     },
//     {
//       name: "Apple MacBook Air M2",
//       description: "A sleek and lightweight laptop with the M2 chip and a 13.6-inch Liquid Retina display.",
//       price: 1099,
//       image: "https://www.apple.com/in/shop/buy-mac/macbook-air/13-inch-m2"
//     },
//     {
//       name: "PlayStation 5 (PS5)",
//       description: "Next-gen gaming console with 4K gaming, ultra-fast SSD, and DualSense controller.",
//       price: 499,
//       image: "https://www.amazon.in/Sony-CFI-2008A01X-PlayStation%C2%AE5-Console-slim/dp/B0CY5HVDS2"
//     },
//     {
//       name: "Nike Air Jordan 1 Retro",
//       description: "Classic high-top sneakers with a timeless design and premium comfort.",
//       price: 180,
//       image: "https://dawntown.co.in/products/air-jordan-1-retro-high-og-university-blue"
//     },
//     {
//       name: "Samsung 65\" QLED 4K Smart TV",
//       description: "Stunning 4K QLED display with Quantum HDR and smart features.",
//       price: 899,
//       image: "https://www.samsung.com/in/tvs/qled-tv/q70d-65-inch-qled-4k-tizen-os-smart-tv-qa65q70daulxl/"
//     },
//     {
//       name: "Apple iPad Pro 12.9\" (M2)",
//       description: "A powerful tablet with the M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
//       price: 1099,
//       image: "https://www.amazon.in/Apple-12-9-inch-iPad-Pro-Wi-Fi-256GB/dp/B0BJLHFZLF"
//     },
//     {
//       name: "Bose SoundLink Revolve+ Bluetooth Speaker",
//       description: "Portable 360-degree sound with deep bass and water resistance.",
//       price: 299,
//       image: "https://www.boseindia.com/en_in/products/speakers/portable_speakers/soundlink-revolve-ii.html"
//     },
//     {
//       name: "Fitbit Charge 6 Fitness Tracker",
//       description: "Advanced fitness tracking with heart rate monitoring, GPS, and sleep tracking.",
//       price: 149,
//       image: "https://www.amazon.in/Fitbit-Exercise-Equipment-6-Months-Membership/dp/B0CC62ZG1M"
//     }
//   ]

const product = [
    {
      name: "Smartphone",
      brand: "Apple",
      image: "https://m.media-amazon.com/images/I/615O-NFQKdL._SX522_.jpg",
      price: 999.99,
      availability: "In Stock",
      category_id: 1
    },
    {
      name: "Wireless Earbuds",
      brand: "Sony",
      price: 199.99,
      image: "https://m.media-amazon.com/images/I/51B6+Iyd3ML._SX355_.jpg",
      availability: "In Stock",
      category_id: 1
    },
    {
      name: "Smartwatch",
      brand: "Samsung",
      image: "https://m.media-amazon.com/images/I/71elbYR1eEL._SX679_.jpg",
      price: 299.99,
      availability: "Out of Stock",
      category_id: 1
    },
    {
      name: "Laptop",
      brand: "Dell",
      image: "https://m.media-amazon.com/images/I/61-Y-eWXqtL._SX679_.jpg",
      price: 1199.99,
      availability: "In Stock",
      category_id: 1
    },
    
    {
      name: "Men's T-Shirt",
      brand: "Nike",
      image: "https://m.media-amazon.com/images/I/31gRzD7iw8L.jpg",
      price: 29.99,
      availability: "In Stock",
      category_id: 2
    },
    
    {
      name: "Women's Handbag",
      brand: "Michael Kors",
      image: "https://m.media-amazon.com/images/I/719mvlpqJBL._SX679_.jpg",
      price: 149.99,
      availability: "In Stock",
      category_id: 2
    },
    {
      name: "Running Shoes",
      brand: "Adidas",
      image: "https://m.media-amazon.com/images/I/61+cSCmhefL._SY695_.jpg",
      price: 89.99,
      availability: "In Stock",
      category_id: 2
    },
    {
      name: "Denim Jeans",
      brand: "Levi's",
      image: "https://m.media-amazon.com/images/I/81gWTENwJUL._SY741_.jpg",
      price: 59.99,
      availability: "Out of Stock",
      category_id: 2
    },
    {
      name: "Blender",
      brand: "NutriBullet",
      image: "https://m.media-amazon.com/images/I/31mfzdVeROL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 79.99,
      availability: "In Stock",
      category_id: 3
    },
    {
      name: "Air Fryer",
      brand: "Philips",
      image: "https://m.media-amazon.com/images/I/41ZZkBMZbIL._SX679_.jpg",
      price: 129.99,
      availability: "In Stock",
      category_id: 3
    },
    {
      name: "Coffee Maker",
      brand: "Keurig",
      image: "https://m.media-amazon.com/images/I/41XISzqSpXL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 99.99,
      availability: "Out of Stock",
      category_id: 3
    },
    {
      name: "Vacuum Cleaner",
      brand: "Dyson",
      image: "https://m.media-amazon.com/images/I/71S3Crq9PNL._SX679_.jpg",
      price: 499.99,
      availability: "In Stock",
      category_id: 3
    }
  ];
  

  
  
  

  export default product