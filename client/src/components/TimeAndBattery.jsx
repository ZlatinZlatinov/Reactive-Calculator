import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryEmpty } from "@fortawesome/free-solid-svg-icons"

export default function TimeAndBattery () {
    return (
        <section className="time">
            <p className="clock"><span>15:08</span></p>
            <p className="battery"><FontAwesomeIcon icon={faBatteryEmpty} /></p>
        </section>
    );
}