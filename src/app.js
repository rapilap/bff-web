document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Minipao Cokelat",
        img: "1.jpg",
        price: 140000,
      },
      { id: 2, name: "Minipao Ayam", img: "2.jpg", price: 140000 },
      { id: 3, name: "Minipao Sapi", img: "3.jpg", price: 140000 },
      {
        id: 4,
        name: "Minipao Strawberry",
        img: "4.jpg",
        price: 140000,
      },
    ],
  }));
});
