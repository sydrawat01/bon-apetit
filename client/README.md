# :ramen: Ramenrogu frontend with react and TypeScript

## :star2: Features

- [TypeScript](https://www.typescriptlang.org/) support
- CSS Modules and SASS support
- [React Refresh for Webpack](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [Dotenv for Webpack](https://github.com/mrsteele/dotenv-webpack)
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) as described by [Brad Frost](https://bradfrost.com/).

## :construction: Development

To run the development server, run the following command:

```shell
  #for yarn users
  yarn start
  #for npm users
  npm run start
```

> This serves the app on `localhost:3000` via the webpack-dev-server package.

## :rocket: Build

- Run the following command to build your project for production:

```shell
  #for yarn users
  yarn build
  #for npm users
  npm run build
```

- To see bundle info from [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) plugin, use the following command(s):

```shell
  #for yarn users
  yarn build:info
  #for npm users
  npm run build:info
```

> Bundle info will be shown on `localhost:3001`. This will open automatically in your preferred browser when you run the above command(s).

- To see the app in prodution mode, navigate to the `build/` folder that is generated after running the above command. This will serve the production ready app to `localhost:5000`.

```shell
  cd build/;
  npx serve
```
