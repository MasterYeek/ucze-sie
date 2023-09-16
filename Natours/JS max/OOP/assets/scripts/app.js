class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>\$${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ8f51A2fJg4EPvVpEMJn1Lk9EO6EAdAovQHUWP61eHMQXCJ4A9FNuzmN1AFnSPJnSYQ&usqp=CAU",
      "a soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ8f51A2fJg4EPvVpEMJn1Lk9EO6EAdAovQHUWP61eHMQXCJ4A9FNuzmN1AFnSPJnSYQ&usqp=CAU",
      "a carpiet which u might like ",
      89.99
    ),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}
const productList = new ProductList();
productList.render();
