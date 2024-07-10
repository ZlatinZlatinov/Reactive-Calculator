export default function MainNav() {
    return (
        <section className="nav">
            <p className="arrows"><i className="fa-solid fa-down-left-and-up-right-to-center"></i></p>

            <ul className="nav-links">
                <li><a href="#">Калкулатор</a></li>
                <li><a href="#">Конвертор</a></li>
            </ul>

            <p className="dots">&#8942;</p>
        </section>
    );
}