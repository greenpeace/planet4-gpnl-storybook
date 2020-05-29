// Hero Image
import '!style-loader!css-loader!sass-loader!../../../vendor/greenpeace/planet4-gpnl-plugin-gutenberg-blocks/assets/src/blocks/HeroImage/scss/hero-image.scss';
import hero_image from './hero_image.html';
import hero_image_docs from './hero_image_docs.mdx';

export const HeroImage = () => hero_image;

export default {
    title: 'Gutenberg Blocks/Hero Image',
    component: HeroImage,
    parameters: { docs: { page: hero_image_docs } },
};