import Output from "./Output";
import SectionButtons from "./SectionButtons";

import { useState } from "react";

export default function SectionContainer() {
    const [result, setResult] = useState("0");
    const [output, setOutput] = useState("=");

    function updateResult(value) {
        switch (value) {
            case 'AC':
                setResult("0");
                setOutput("=");
                return;
            case "":
                setResult(old => String(old).slice(0, -1));
                return;
            case '=':
                try {
                    setResult(old => eval(old));
                    setOutput("=" + eval(result));
                } catch (err) {
                    window.alert("Wrong input!");
                }
            case '%':
                setResult(old => old / 100);
                return;
        }

        if (result === "0") {
            setResult(value);
        } else {
            setResult(old => old + value);
        }
    }
    return (
        <div className="section-container">
            {/*<!--Output-->*/}
            <Output curr={result} output={output} />

            {/* <!--Section Buttons--> */}
            <SectionButtons updateResult={updateResult} />
        </div>
    );
}