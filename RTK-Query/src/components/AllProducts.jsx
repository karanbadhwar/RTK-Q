import { useGetAllProductsQuery } from "../app/Service/dummyData";
import Product from "./Product";

function AllProducts() {
  //using the fetching all products hook
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Error! We got an Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
