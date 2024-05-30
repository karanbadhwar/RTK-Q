import { useGetProductByIdQuery } from "../app/Service/dummyData";
import Product from "./Product";

function SpecificProduct() {
  const { data: product, isError, isLoading } = useGetProductByIdQuery(5);

  if (isError) {
    return <h1>Error! We got an Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Product product={product} />
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default SpecificProduct;
