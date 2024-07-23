import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"; 
import {Link} from 'react-router-dom';

export default function MainNav() {
    return (
        <section className="nav">
            <p className="arrows"><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /></p>

            <ul className="nav-links">
                <li><Link to='/calculator'>Калкулатор</Link></li>
                <li><Link to='/convertor'>Конвертор</Link></li>
            </ul>

            <p className="dots">&#8942;</p>
        </section>
    );
}