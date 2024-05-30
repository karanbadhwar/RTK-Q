import { useAddNewProductMutation } from "../app/Service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isLoading, error }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newData = {
        id: 1,
        title: "Amazing T-shirt",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, voluptatem.",
      };
      await addNewProduct(newData);
    } catch (err) {
      console.error("Error adding new product", err);
    }
  };

  return (
    <div>
      <h3>{data?.id}</h3>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add a new product
      </button>
    </div>
  );
};

export default AddNewProduct;
