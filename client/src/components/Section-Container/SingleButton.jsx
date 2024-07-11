import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"

export default function SingleButton({
    className,
    value,
    iTag,
    updateResult
}) {
    return (
        <button
            className={className}
            onClick={() => updateResult(value)}
        >{value ? value :
            <FontAwesomeIcon icon={
                iTag == "faDeleteLeft" ? faDeleteLeft : faArrowsRotate
            } />
            }</button>
    );
}