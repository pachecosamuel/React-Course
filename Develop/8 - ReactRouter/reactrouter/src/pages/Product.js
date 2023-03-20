import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {

  // 4 -> Dynamic route
  const { id } = useParams();

  // 5 -> Carregamento do dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>Product id: {id}</p>
      {error && <p>An error has occurred</p>}
      {loading && <p>Loading ...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Link to={`/products/${product.id}/info`}>Know more about this product ...</Link>
        </div>
      )}
    </>
  )
};

export default Product;