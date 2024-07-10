import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"

export default function MainNav() {
    return (
        <section className="nav">
            <p className="arrows"><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /></p>

            <ul className="nav-links">
                <li><a href="#">Калкулатор</a></li>
                <li><a href="#">Конвертор</a></li>
            </ul>

            <p className="dots">&#8942;</p>
        </section>
    );
}