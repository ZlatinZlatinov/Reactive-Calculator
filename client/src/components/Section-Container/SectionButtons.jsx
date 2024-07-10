export default function SectionButtons() {
    return (
        <section className="buttons-container">
            <button className="btn orange-text">AC</button>
            <button className="btn orange-text"><i className="fa-solid fa-delete-left"></i></button>
            <button className="btn orange-text">%</button>
            <button className="btn orange-text">/</button>

            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn orange-text">x</button>

            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn orange-text">+</button>

            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn orange-text">-</button>

            <button className="btn orange-text"><i className="fa-solid fa-arrows-rotate"></i></button>
            <button className="btn">0</button>
            <button className="btn">,</button>
            <button className="btn btn-orange-fill">=</button>
        </section>
    );
}