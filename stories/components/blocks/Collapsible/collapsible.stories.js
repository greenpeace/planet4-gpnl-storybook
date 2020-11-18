import '!style-loader!css-loader!sass-loader!../../../../vendor/greenpeace/planet4-gpnl-plugin-gutenberg-blocks/assets/src/blocks/Collapsible/scss/collapsible.scss';
import docs from './docs.mdx';

import {
    withKnobs,
    text,
} from '@storybook/addon-knobs';

export const collapsible = () => {

    const title = `${text('title', 'Wat doet Greenpeace met mijn geld?')}`;
    const content = `${text('content', 'Greenpeace accepteert geen geld van overheden en bedrijven. Verantwoording dragen we daarom alleen af aan de mensen die ons steunen. Met jouw steun organiseren wij verschillende acties en projecten.')}`;

    return `<div class="wp-block-planet4-gpnl-blocks-collapsible">
                <details>
                    <summary class="title">${title}</summary>
                    <div class="content">${content}</div>
                </details>
            </div>`;
}

export default {
    title: 'Components/Gutenberg Blocks/Collapsible',
    parameters: {docs: {page: docs}},
    decorators: [withKnobs],
};
