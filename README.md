# Planet 4 GPNL Storybook

This repository contains a component library for GPNL. It is a work in progress.

## Run a local static app
```
npx http-server storybook-static
```
This will run the instance of the static app (the files in the directory `storybook-static`) locally. By default a local webserver will start on port 8080. Use the `-p` flag if you wish to run the server on a different port, for example run: `npx http-server storybook-static -p 8000`.

## Development
 ```
 yarn run storybook
```
This will run a local instance for development purposes. 

## Export to a static app
 ```
 yarn build-storybook
```
This will build the storybook configured in the Storybook directory into a static web app and place it inside the directory `storybook-static`. Now you can deploy the content in the `storybook-static` directory wherever you want.

## Github Pages
The static app is hosted on Github Pages: https://greenpeace.github.io/planet4-gpnl-storybook/. In the settings on Github, the github pages is linked to the branch `gh-pages`, which in turn is a subtree of the directory `storybook-static`. To push the static app to Github Pages run ` git subtree push --prefix storybook-static origin gh-pages`. 

For more information on how this works see https://gist.github.com/cobyism/4730490. 