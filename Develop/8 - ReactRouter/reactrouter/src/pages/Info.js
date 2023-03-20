import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Info = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id + "/info";
    const { data: product, loading, error } = useFetch(url);

    return (
        <div>
            <h1>More info about the product: {id}</h1>
        </div>
    )
}

export default Info;