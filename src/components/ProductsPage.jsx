import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [displayProducts, setDisplayProducts] = useState(jsonData);

  const filterProduct = (value) => {
    const productsCopy = [...products];
    const filterArr = productsCopy.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    setDisplayProducts(filterArr);
  };

  const check = (input) => {
    const productsCopy = [...products];
    const filterArr = productsCopy.filter(
      (product) => product.inStock === true
    );
    if (input) {
      setDisplayProducts(filterArr);
    } else {
      setDisplayProducts(products);
    }
  };

  //   setProducts(jsonData);

  return (
    <div className="Page">
      <h1>IronStore</h1>
      <SearchBar filterProduct={filterProduct} check={check} />
      <ProductTable products={displayProducts} />
    </div>
  );
}

export default ProductsPage;
