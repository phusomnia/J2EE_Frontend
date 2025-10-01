import React, {useEffect, useState} from "react";
import Footer from "@/components/footer";

export default function AboutRoute() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => {
                setCount(c => c + 1)
            }}>Click</button>
                <h1>Main Page</h1>
            <Footer/>
        </>
    );
}
