# [Create React Component](https://gokulkrishh.github.io/create-react-component/) [![Build Status](https://travis-ci.org/gokulkrishh/create-react-component.svg?branch=master)](https://travis-ci.org/gokulkrishh/create-react-component)

*A simple react component boilerplate using webpack v2*

### [Demo](https://gokulkrishh.github.io/create-react-component/)

### Get Started

##### 1. Clone the repository

```bash
git clone https://github.com/gokulkrishh/create-react-component && cd create-react-component
```

##### 2. Make it as your own repository

```bash 
rm -rf .git && git init
```

##### 3. Install dependencies

```bash
npm install
```

(or) yarn

```bash
yarn install
```

### Folder Structure

```
.
├── __test__/
├── dist/
├── demo/
├── src/
│   └── index.js
│   └── styles.css
└── package.json
└── webpack.build.config.js
└── webpack.config.js
```

### Features

- [`Webpack v2`](https://webpack.js.org/) for bundling the dependencies.

- `ES6` support.

- `ESLint` support.

- [`Jest`](https://facebook.github.io/jest/docs/tutorial-react.html) for test cases.

- `Travis CI` support.

- Deploy demo page to `gh-pages`.

### Make it as your own component

- In [`package.json`](https://github.com/gokulkrishh/create-react-component/blob/master/package.json) file change the name from `create-react-component` to `your-component-name`.

- Search for `HelloWorld` and replace it with `your component name`.

### [Available scripts](https://github.com/gokulkrishh/create-react-component/blob/master/package.json#L28)

- `npm run start`  - To start webpack dev-server.

- `npm run watch`  - To watch a file change and build the component.

- `npm run build`  - To produce the build file.

- `npm run deploy` - To deploy the demo folder to gh-pages.

- `npm run test`   - To run test cases.


### [Publish as node module](https://docs.npmjs.com/getting-started/creating-node-modules)

```bash 
npm publish
```

*Make sure your package name, version and other information in `package.json` is correct.*

#### TODO 

- [ ] - cli similar to create-react-app

*Found a bug or an improvement. File an issue and PR's are most welcome :)*

## License

MIT © [Gokulakrishnan Kalaikovan](https://github.com/gokulkrishh)
