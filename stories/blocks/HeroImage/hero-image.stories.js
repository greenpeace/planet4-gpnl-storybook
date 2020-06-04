// Hero Image
import '!style-loader!css-loader!sass-loader!../../../vendor/greenpeace/planet4-gpnl-plugin-gutenberg-blocks/assets/src/blocks/HeroImage/scss/hero-image.scss';
import hero_image from './hero_image.html';
import hero_image_without_button from './hero_image_without_button.html';
import hero_image_small from './hero_image_small.html';
import hero_image_docs from './hero_image_docs.mdx';

export const Default = () => hero_image;
export const Small = () => hero_image_small;
export const WithoutButton = () => hero_image_without_button;


export default {
    title: 'Gutenberg Blocks/Hero Image',
    parameters: { docs: { page: hero_image_docs } },
};