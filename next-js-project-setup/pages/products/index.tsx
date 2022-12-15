const Products = () => {
  return (
    <div>
      <div>Products</div>
      <ul>
        {['product1', 'product2', 'product3'].map((product) => (
          <li key={product}>
            <a href={`/products/${product}`}>{product}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
//products.tsx ==> products/index.tsx
