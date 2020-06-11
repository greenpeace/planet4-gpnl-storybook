# Planet 4 GPNL Storybook

This repository contains a component library for GPNL. It is a work in progress.  

## Run for development
 ```
 yarn run storybook
```
This will run a local instance for development purposes. 

## Export to a static app
 ```
 yarn build-storybook
```
This will build the storybook configured in the Storybook directory into a static web app and place it inside the directory `storybook-static`. Now you can deploy the content in the `storybook-static` directory wherever you want. To test it locally run: 
```
npx http-server storybook-static
```
