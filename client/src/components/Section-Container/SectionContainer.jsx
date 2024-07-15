import { ResultContext } from "../../Contexts/ResultContext";
import Output from "./Output";
import SectionButtons from "./SectionButtons";
import { useUpdateResult } from "../../Hooks/useUpdateRestult";

export default function SectionContainer() {
    const { updateResult, currentResult, output } = useUpdateResult();

    return (
        <div className="section-container">
            <ResultContext.Provider value={{ updateResult, currentResult, output }}>
                {/*<!--Output-->*/}
                <Output />

                {/* <!--Section Buttons--> */}
                <SectionButtons />
            </ResultContext.Provider>
        </div>
    );
}