
console.log("===== CASE 1: USER DATA CLEANER =====");

// Data nama mentah dari form input
const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Bersihkan spasi di awal dan akhir string
const cleanNames = rawNames.trim();

// 2. Ubah string menjadi array nama
const namesArray = cleanNames.split(",");

// 3. Ubah setiap nama menjadi lowercase dan hapus spasi
const formattedNames = namesArray.map((name) =>
  name.trim().toLowerCase()
);

// 4. Gabungkan kembali menjadi string
const resultNames = formattedNames.join(" | ");

console.log("Data awal:", rawNames);
console.log("Array nama:", namesArray);
console.log("Nama setelah dibersihkan:", formattedNames);
console.log("Hasil akhir:", resultNames);


console.log("\n===== CASE 2: E-COMMERCE PRODUCT FILTER =====");

// Data produk
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true }
];

// 1. Ambil produk yang aktif
const activeProducts = products.filter(
  (product) => product.active === true
);

// 2. Ambil nama produk dan ubah menjadi huruf kapital
const activeProductNames = activeProducts.map(
  (product) => product.name.toUpperCase()
);

// 3. Hitung total harga semua produk aktif
const totalPrice = activeProducts.reduce(
  (total, product) => total + product.price,
  0
);

console.log("Produk aktif:", activeProducts);
console.log("Nama produk huruf kapital:", activeProductNames);
console.log("Total harga produk aktif:", totalPrice);
