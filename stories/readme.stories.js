import { withLinks } from '@storybook/addon-links';

import general from './readme_general.html';

export default {
  title: 'Read Me',
  decorators: [withLinks],
};

export const GeneralInformation = () => general;
