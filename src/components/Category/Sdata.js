// SdataCategory.js
const formatToRupiah = (price) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  // Replace the currency symbol if it appears doubled
  const correctedPrice = formattedPrice.replace("IDR", "Rp");

  return correctedPrice;
};


const SdataCategory = {
  shopItems: [
    {
      id: 7,
      cover: "./images/shops/shops-1.png",
      name: "Mapple Earphones",
      price: (1800000), // Convert the price to Rupiah (1,800,000)
      discount: "25",
    },
    {
      id: 8,
      cover: "./images/shops/shops-2.png",
      name: "Vivo android one",
      price: (1200000), // Convert the price to Rupiah (1,200,000)
      discount: "10",
    },
    {
      id: 9,
      cover: "./images/shops/shops-3.png",
      name: "Sony Light",
      price: (200000), // Convert the price to Rupiah (200,000)
      discount: "50",
    },
    {
      id: 10,
      cover: "./images/shops/shops-4.png",
      name: "Iphone",
      price: (9990000), // Convert the price to Rupiah (9,990,000)
      discount: "10",
    },
    {
      id: 11,
      cover: "./images/shops/shops-5.png",
      name: "Ceats wireless earphone",
      price: (800000), // Convert the price to Rupiah (800,000)
      discount: "20",
    },
    {
      id: 12,
      cover: "./images/shops/shops-7.png",
      name: "Redimi Phone",
      price: (4000000), // Convert the price to Rupiah (4,000,000)
      discount: "20",
    },
    {
      id: 13,
      cover: "./images/shops/shops-8.png",
      name: "Xeats Bluetooth earphones",
      price: (600000), // Convert the price to Rupiah (600,000)
      discount: "5",
    },
    {
      id: 14,
      cover: "./images/shops/shops-9.png",
      name: "Airpod",
      price: (1200000), // Convert the price to Rupiah (1,200,000)
      discount: "10",
    },
    {
      id: 15,
      cover: "./images/shops/shops-1.png",
      name: "Mapple Earphones",
      price: (1800000), // Convert the price to Rupiah (1,800,000)
      discount: "25",
    },
    {
      id: 16,
      cover: "./images/shops/shops-2.png",
      name: "Vivo android one",
      price: (1200000), // Convert the price to Rupiah (1,200,000)
      discount: "10",
    },
    {
      id: 17,
      cover: "./images/shops/shops-3.png",
      name: "Sony Light",
      price: (200000), // Convert the price to Rupiah (200,000)
      discount: "50",
    },
  ],
};

export default SdataCategory;
