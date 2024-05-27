const products = [
  { name: 'Product A', price: 10, category: 'Electronics' },
  { name: 'Product B', price: 20, category: 'Electronics' },
  { name: 'Product C', price: 15, category: 'Books' },
  { name: 'Product D', price: 5, category: 'Books' },
  { name: 'Product E', price: 25, category: 'Electronics' },
];

function calculateRevenueByCategory(products) {
  const revenueByCategory = new Map();
  for (const product of products) {
    const { category, price } = product;
    if (revenueByCategory.has(category)) {
      console.log(revenueByCategory.get(category)) //#10 15 #30
      revenueByCategory.set(category, revenueByCategory.get(category) + price);
    } else {
      revenueByCategory.set(category, price);
    }
  }
  return revenueByCategory;
}


const revenueByCategory = calculateRevenueByCategory(products);
console.log(revenueByCategory);
// Output: Map(2) { 'Electronics' => 55, 'Books' => 20 }
