import { useState, useEffect } from "react";

// 4 - Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - Refactoring the POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "ContentType": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        };
    };

    // Get na api
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const responseJson = await response.json();
            setData(responseJson);
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

    return { data, httpConfig };
};