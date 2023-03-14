import { useState, useEffect } from "react";

// 4 - Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - Refactoring the POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - Loading
    const [loading, setLoading] = useState(false);

    // 7 - Treating errors
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "ContentType": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod("POST");
        };
    };

    // Get na api
    useEffect(() => {
        const fetchData = async () => {
            // 6 - Loading
            setLoading(true);

            // 8 - Tratamento de erros e exceções
            try {
                const response = await fetch(url);
                const responseJson = await response.json();
                setData(responseJson);
            } catch (error) {
                console.log(error.message);
                setError("Something went wrong!");
            }

            // 6 - Loading
            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // 5 - Refactoring the POST
    useEffect(() => {

        const httpRequest = async () => {

            if (method === "POST") {
                let fetchOptions = [url, config];
                const response = await fetch(...fetchOptions);
                const responseJson = await response.json();
                setCallFetch(responseJson);
            }
        }
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};