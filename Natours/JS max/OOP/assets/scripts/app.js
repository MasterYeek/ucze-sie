const productList = {
  products: [
    {
      title: "A pillow",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ8f51A2fJg4EPvVpEMJn1Lk9EO6EAdAovQHUWP61eHMQXCJ4A9FNuzmN1AFnSPJnSYQ&usqp=CAU",
      price: 19.99,
      description: "a soft pillow!",
    },
    {
      title: "A pillow",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fuvdEQsgAlsoL80iJf0O4TdxmhbQFX6JaDwDkubhwpbAhxAMxvhXbbbOQrzfZ1-bOxA&usqp=CAU",
      price: 89.99,
      description: "a carpiet which u might like ",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}">
      <div class="product-item__content">
      <h2>${prod.title}</h2>
      <h3>\$${prod.price}</h3>
      <p>${prod.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(productList);
  },
};
productList.render();
