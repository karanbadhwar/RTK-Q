/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Product({ product }) {
  return (
    <div>
      <h1>{product?.title}</h1>
      <h3>{product?.brand}</h3>
      <p>{product?.description}</p>
    </div>
  );
}

export default Product;
