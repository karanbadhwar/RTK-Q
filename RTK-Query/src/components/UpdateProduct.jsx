import { useUpdateProductMutation } from "../app/Service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  //Updating the product
  const handleUpdate = async () => {
    try {
      const updatedData = {
        title: "Title updated 🤝",
      };

      await updateProduct({ id: productId, updatedProduct: updatedData });
    } catch (err) {
      console.error("error updating product", err);
    }
  };

  return (
    <div>
      <h3>{data?.id}</h3>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <button onClick={handleUpdate} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
