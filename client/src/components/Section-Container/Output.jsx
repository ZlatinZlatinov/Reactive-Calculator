import { useState, useContext } from "react"; 
import {ResultContext} from "../../Contexts/ResultContext"

export default function Output() {
    const {currentResult, output} = useContext(ResultContext);
    const [inputValue, setInputValue] = useState(currentResult);

    return (
        <section className="output">
            <input type="text"
                className="initial-input"
                placeholder="0"
                onChange={(e) => setInputValue(currentResult)}
                value={currentResult} />

            <input type="text"
                className="result"
                onChange={(e) => setInputValue(output)}
                value={output}
                placeholder="=" />
        </section>
    );
}