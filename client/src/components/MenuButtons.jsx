import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

export default function MenuButoons() {
    return (
        <section className="menu-buttons">
            <p><FontAwesomeIcon icon={faSquare} /></p>
            <p><FontAwesomeIcon icon={faCircleDot} /></p>
            <p><FontAwesomeIcon icon={faCaretLeft} /></p>
        </section>
    );
}