import { useState } from "react";

export const useUpdateResult = () => {

    const [currentResult, setCurrentResult] = useState("0");
    const [output, setOutput] = useState("=");

    function updateResult(value) {
        if (currentResult === "0") {
            setCurrentResult(value);
        } else {
            setCurrentResult(old => old + value);
        }

        if (value === "AC") {
            setCurrentResult("0");
            setOutput("=");

        } else if (value === "") {
            setCurrentResult(old => String(old).slice(0, -1));

        } else if (value === "=") {
            try {
                setCurrentResult(eval(currentResult));
                setOutput("=" + eval(currentResult));
            } catch (err) {
                setOutput("Wrong Input!");
            }

        } else if (value === "%") {
            setCurrentResult(Number(currentResult) / 100);
        }
    }

    return { updateResult, output, currentResult }
}