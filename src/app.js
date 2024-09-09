document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Minipao Cokelat",
        img: "1.jpg",
        price: 14000,
      },
      { id: 2, name: "Minipao Ayam", img: "2.jpg", price: 14000 },
      { id: 3, name: "Minipao Sapi", img: "3.jpg", price: 14000 },
      {
        id: 4,
        name: "Minipao Strawberry",
        img: "4.jpg",
        price: 14000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    qty: 0,
    add(newItem) {
      // Cek Barang
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // Jika Barang Belum Ada
      if (!cartItem) {
        this.items.push({ ...newItem, qty: 1, total: newItem.price });
        this.qty++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.qty++;
            item.total = item.price * item.qty;
            this.qty++;
            this.total += cartItem.price;

            return item;
          }
        });
      }
    },

    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.qty > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.qty--;
            item.total = item.price * item.qty;
            this.qty--;
            this.total -= item.price;
            return price;
          }
        });
      } else if (cartItem.qty === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.qty--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
