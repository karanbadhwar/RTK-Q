import { useDeleteProductMutation } from "../app/Service/dummyData";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  console.log(data);

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error deleting product", err);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
      <button onClick={handleDelete} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;