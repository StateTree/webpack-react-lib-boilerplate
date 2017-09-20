# Webpack React App Biolerplate

Webpack babel based boilerplate for creating React Apps (Input: ES6, Output: bundled es5 version)

## Features

* Webpack 3.
* ES6 as a source.

## Process

```
	ES6 source files
            |
            |
   (webpack + babel)
            |
            |
            |
          Bundle (umd)
```

Result:

```
project
  |
  |__ src
  |    |__ index.js (es6)
  |
  |__ lib
       |__ index.js (es5) Bundled
  

```

## How to use

1. Create your App project `npm init`
2. `npm install git+http://github.com/sanjay-boilerplates/webpack-react-library.git`
	1. This will create src, lib, demo, test, docs directory
	2. Creates babel and webpack config
	3. Updates your package.json properties `devDependencies`, `dependencies` and `scripts`
	4. Removes itself from your node_modules project


## Scripts Provided by this

* `npm run start` - webpack dev server
* `npm run lint` - test and fix lint error
* `npm run prebuild` - Removes the dist folder
* `npm run build` - produces bundle version of your project under the `lib` folder.
* `npm run postbuild` - buildconfig inside scripts is used to execute `copy operation`
* `npm run publish` -  publish to github gh-pages for demo

## To-do
1. Test Framework
2. Doc support
3. Release Version Incrementer Support

