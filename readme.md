# [Create React Component](https://gokulkrishh.github.io/create-react-component/) [![Build Status](https://travis-ci.org/gokulkrishh/create-react-component.svg?branch=master)](https://travis-ci.org/gokulkrishh/create-react-component)

*A simple react component boilerplate using webpack 2*

### [Demo](https://gokulkrishh.github.io/create-react-component/)

### Get started

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
├── __test__
├── dist
├── demo
├── src
│   └── index.js
│   └── styles.css
└── package.json
└── webpack.build.config.json
└── webpack.config.json
```

### Build Tools

##### 1. [`Webpack(v2)`](https://webpack.js.org/) - bundling our dependencies

##### 2. [`Jest`](https://facebook.github.io/jest/docs/tutorial-react.html)        - for component testcases

### Make it as your own component

- In `package.json` file change the `react-component-boilerplate` to `your component name`.

- Search for `HelloWorld` and replace it with `your component name`.

### Available scripts

##### 1. `npm run start`  - To start webpack dev-server.

##### 2. `npm run watch`  - To watch a file change and build the component.

##### 3. `npm run build`  - To produce the build file.

##### 4. `npm run deploy` - To deploy the demo folder to gh-pages.

##### 5. `npm run test`   - To run test cases.


### Publish as node module

```bash 
npm publish
```

#### TODO 

- [ ] - cli similar to create-react-app


*Found a bug or an improvement. File an issue and PR's are most welcome :)*

## License

MIT © [Gokulakrishnan Kalaikovan](https://github.com/gokulkrishh)
