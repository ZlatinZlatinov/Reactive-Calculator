import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { ResultContext } from '../../Contexts/ResultContext';

export default function SingleButton({
    className,
    value,
    iTag
}) {
    const { updateResult } = useContext(ResultContext);

    return (
        <button
            className={className}
            onClick={() => updateResult(value)}>
            {value ? value :
                <FontAwesomeIcon icon={
                    iTag == "faDeleteLeft" ? faDeleteLeft : faArrowsRotate
                } />}
        </button>
    );
}