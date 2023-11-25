import { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;

  return (
    <table className="table">
      <thead className="header">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => {
          return <ProductRow product={product} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
