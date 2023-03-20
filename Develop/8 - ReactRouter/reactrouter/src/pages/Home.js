// Style
import styles from "./Home.module.css";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {

    const url = "http://localhost:3000/products";

    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Products</h1>
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            <ul className={styles.products}>
                {items &&
                    items.map((product) => (
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

export default Home;