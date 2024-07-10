import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryEmpty } from "@fortawesome/free-solid-svg-icons"
import CurrentTime from './CurrentTime';

export default function TimeAndBattery () {
    return (
        <section className="time">
            <CurrentTime/>
            <p className="battery"><FontAwesomeIcon icon={faBatteryEmpty} /></p>
        </section>
    );
}