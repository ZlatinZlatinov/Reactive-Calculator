import { buttonsArray } from "./buttonsArray";
import SingleButton from "./SingleButton";

export default function SectionButtons() {
    return (
        <section className="buttons-container">
            {buttonsArray.map((btn) => {
                return (
                    <SingleButton
                        key={btn.id}
                        className={btn.className}
                        value={btn.value}
                        iTag={btn.iTag}
                        >
                    </SingleButton>);
            })}
        </section>
    );
}