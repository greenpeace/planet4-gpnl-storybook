module.exports = {
  // this dirname is because we run tests from project root
  stories: [`${__dirname}/../stories/**/*.stories.*`],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
};
