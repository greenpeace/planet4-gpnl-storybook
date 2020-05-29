import { addParameters } from '@storybook/html';

import 'bootstrap/dist/css/bootstrap.css';

import '!style-loader!css-loader!sass-loader!../vendor/greenpeace/planet4-master-theme/assets/build/style.min.css';
import '!style-loader!css-loader!sass-loader!../vendor/greenpeace/planet4-child-theme-netherlands/assets/css/scss/style.scss';

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: '200px',
    transformSource: (src) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
});
