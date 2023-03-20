import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Search = () => {

    const[searchParams] = useSearchParams();
    const url = "http://localhost:3000/products?" + searchParams;
    const {data: product, loading, error} = useFetch(url);

    return (
        <div>
            <h1>Available products</h1>
            <ul /*className={styles.products} */>
                {product &&
                    product.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>R$: {product.price}</p>
                            {/* 4  - rota dinamica */}
                            <Link to={`/products/${product.id}`}>Details</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
};

export default Search;