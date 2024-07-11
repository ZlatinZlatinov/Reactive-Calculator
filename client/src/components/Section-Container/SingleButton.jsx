import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"

export default function SingleButton({
    className,
    value,
    iTag
}) {
    return (
        <button className={className}>{value ? value :
            <FontAwesomeIcon icon={
                iTag == "faDeleteLeft" ? faDeleteLeft : faArrowsRotate
            } />
        }</button>
    );
}