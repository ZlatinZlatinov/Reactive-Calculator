import Output from "./Output";
import SectionButtons from "./SectionButtons";

export default function SectionContainer() {
    return (
        <div className="section-container">
            {/*<!--Output-->*/}
            <Output/>

            {/* <!--Section Buttons--> */}
            <SectionButtons/>
        </div>
    );
}