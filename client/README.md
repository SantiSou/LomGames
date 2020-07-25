# E&E Client

## Commands

1. **Run the app**. `yarn start` or `npm start`
2. **Build the app**. `yarn build` or `npm run build`
3. **Lint the app**. `yarn lint` or `npm run lint`
4. **Test the app**. `yarn test` or `npm run test`, for UI option `yarn test:open` or `npm run test:open`,

## Getting Started

1. Install dependencies: `yarn` or `npm install`
2. Create the environment variables files in root folder(.env.dev, .env.staging and .env.prod):

`.env.example` example:

```
  API_URL=http://your-api-url.com
  AWS_BUCKET=bucket
  AWS_REGION=region
  AWS_ACCESS_KEY_ID=key_id
  AWS_SECRET_ACCESS_KEY=secret_key
```

4. Start the dev server: `yarn start` or `npm start -s`

## Running script with different environments

To change the set of environment variables for a script it's needed to run ENV=my_environment before the script.

For example: `ENV=staging yarn build`

## Initial Machine Setup

**Install [Node 7.0.0 or greater, 10.14.2 LTS preferred](https://nodejs.org)**
Project is currently set to node version `10.14.2 LTS`. Make sure that you are using the node version specified in the `package.json`, if you prefer to use a different one you can change it there.

**Install [Yarn](https://yarnpkg.com/en/docs/install)** - Fast, reliable, and secure package manager

## Technologies

| **Tech**                                                   | **Description**                                                                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React](https://facebook.github.io/react/)                 | Fast, composable client-side components.                                                                                                                |
| [Redux](http://redux.js.org)                               | Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging.                                                 |
| [React Router 5](https://github.com/reactjs/react-router)  | A complete routing library for React                                                                                                                    |
| [Babel](http://babeljs.io)                                 | Compiles ES6 to ES5. Enjoy the new version of JavaScript today.                                                                                         |
| [Webpack 4](http://webpack.github.io)                      | Bundles npm packages and our JS into a single file. Includes hot reloading via [React Hot Loader](https://github.com/gaearon/react-hot-loader).         |
| [Express](https://github.com/expressjs/express)            | Fast, unopinionated, minimalist web framework for node.                                                                                                 |
| [Cypress](https://cypress.io/)                             | Automated integration tests. Default way of testing.                                                                                                    |
| [Jest](https://facebook.github.io/jest/)                   | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node.            |
| [ESLint](http://eslint.org/)                               | Lint JS. Reports syntax and style issues. Using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for the airbnb style guides. |
| [SASS](http://sass-lang.com/)                              | Compiled CSS styles with variables, functions, and more.                                                                                                |
| [PostCSS](https://github.com/postcss/postcss)              | Transform styles with JS plugins. Used to autoprefix CSS                                                                                                |
| [Stylelint](https://github.com/stylelint/stylelint)        | Modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.                                                   |
| [Redux Persist](https://github.com/rt2zz/redux-persist)    | Persist and rehydrate your redux store                                                                                                                  |
| [Immer](https://github.com/immerjs/immer)                  | Allows you to work with immutable state in a more convenient way.                                                                                       |
| [React Intl](https://github.com/yahoo/react-intl/)         | Localization for language support.                                                                                                                      |
| [Rootstrap UI](https://github.com/rootstrap/rootstrap-ui/) | Rootstrap UI is the components & styles library to build user interfaces                                                                                |

## License

MIT

## Credits

Based on **React Redux Base** maintained by [Rootstrap](http://www.rootstrap.com) with the help of our [contributors](https://github.com/rootstrap/react-redux-base/contributors).

[<img src="https://s3-us-west-1.amazonaws.com/rootstrap.com/img/rs.png" width="100"/>](http://www.rootstrap.com)
