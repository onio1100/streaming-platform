import { useState } from "react";

export default function useCount(start = 0) {
    const [count, setCount] = useState(start);

    function handleCounting() {
        setCount((prevCount) => prevCount + 1)
        console.log(count);
    }

    const ob = {
        onClick: handleCounting,
        alt: count
    }
    return ob;
}