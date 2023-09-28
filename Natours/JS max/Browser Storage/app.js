const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const dbRequest = indexedDB.open("SotrageDummy", 1);
let db;

dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({ id: "p1", title: "a First Product ", price: 12.99 });
  };
};

dbRequest.onerror = function (event) {
  console.log("Error");
};
storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const db = event.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productsStore.add({ id: "p3", title: "a Secound Product ", price: 122.99 });
});

retrBtn.addEventListener("click", () => {});
