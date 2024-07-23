import { iconsArray } from './iconsArray';
import './convertor.css';
import { CovnvertorCard } from './ConvertorCard';

export const Convertor = function () {

    return (
        <section id="converter">
            {iconsArray.map(i => <CovnvertorCard
                key={i.id}
                icon={i.icon}
                textContent={i.textContet} />)}
        </section>
    );
}