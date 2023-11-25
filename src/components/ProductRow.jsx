import { useState } from 'react';

function ProductRow(props) {
  const { product } = props;

  const toggleColor = (color) => {
    if (color) {
      return 'black';
    } else {
      return 'red';
    }
  };

  console.log(product);
  return (
    <tr className="lines">
      <td className={toggleColor(product.inStock)}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
