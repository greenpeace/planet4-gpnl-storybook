// Hero Image
import '!style-loader!css-loader!sass-loader!../../../../vendor/greenpeace/planet4-gpnl-plugin-gutenberg-blocks/assets/src/blocks/HeroImage/scss/hero-image.scss';
import social_message_docs from './social_message_docs.mdx';

import {
    array,
    boolean,
    button,
    color,
    date,
    select,
    withKnobs,
    text,
    number,
} from '@storybook/addon-knobs';

export const heroImage = () => {

    const small = boolean('Small variant', false);

    const title = `<h1 class="hero__title"><span>${text('Title', 'Protest-actie op Schiphol')}</span></h1>`;
    const abstract = `<p class="hero__description">${text('Abstract','11 dappere actievoerders fietsen de landingsbaan van Schiphol op. Zij roepen het kabinet op om klimaatvoorwaarden te stellen aan steun voor grote vervuilers als KLM.')}</p>`;
    const button = `<a href="https://www.greenpeace.org/nl/acties/geen-poen-zonder-groen" class="btn btn-small btn-medium btn-primary hero__button">${text('Button ', 'Kom ook in actie')}</a>`;
    const noTitle = boolean('No title', false);
    const noAbstract = boolean('No abstract', false);
    const noButton = boolean('No button', false);

    return `<section class="hero ${small === true ? 'hero__small' : ''}" style="background-image: url('https://storage.googleapis.com/planet4-netherlands-stateless/2020/05/def2160d-actie-landingsbaan-klm.jpg'); background-position: 78% 91%; ">
    <div class="page-template hero__wrapper ">
        <div class="hero__text">
            ${noTitle === false ? title : ''}
            ${noAbstract === false ? abstract : ''}
            ${noButton === false ? button : ''}
        </div>
    </div>
</section>`;
}

export default {
    title: 'Components/Gutenberg Blocks/Social Message',
    parameters: {docs: {page: social_message_docs}},
    decorators: [withKnobs],
};
