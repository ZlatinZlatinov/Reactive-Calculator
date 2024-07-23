import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";

export const CovnvertorCard = function ({ icon, textContent }) {

    return (
        <div class="converter-card">
            <a href="">
                <FontAwesomeIcon icon={fas[icon]} />
                <span>{textContent}</span>
            </a>
        </div>
    );
}