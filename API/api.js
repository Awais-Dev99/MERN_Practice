async function fetchProduct() {
  let code = document.getElementById("barcodeInput").value.trim();
  let infoDiv = document.getElementById("productInfo");
  infoDiv.innerHTML = "Loading...";

  // Use Open Food Facts API v2
  let url = `https://world.openfoodfacts.org/api/v2/product/${code}.json`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    if (!data.product) {
      infoDiv.innerHTML = "Product not found!";
      return;
    }

    let p = data.product;

    infoDiv.innerHTML = `
      <img src="${p.image_front_small_url || ''}" alt="Product image">
      <h2>${p.product_name || "No name available"}</h2>
      <div class="info"><strong>Brand:</strong> ${p.brands || "N/A"}</div>
      <div class="info"><strong>Category:</strong> ${p.categories || "N/A"}</div>
      <div class="info"><strong>Ingredients:</strong> ${p.ingredients_text || "N/A"}</div>
      <div class="info"><strong>Countries sold in:</strong> ${p.countries || "N/A"}</div>
    `;
  } catch (err) {
    infoDiv.innerHTML = "Error fetching data.";
    console.error(err);
  }
}