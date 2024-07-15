import { useState } from "react";

export default function Output({ curr, output }) {
    const [inputValue, setInputValue] = useState(curr);

    return (
        <section className="output">
            <input type="text"
                className="initial-input"
                placeholder="0"
                onChange={(e) => setInputValue(curr)}
                value={curr} />

            <input type="text"
                className="result"
                onChange={(e) => setInputValue(output)}
                value={output}
                placeholder="=" />
        </section>
    );
}