# Running lint Locally

Using yarn to install packages:

```sh
yarn install
```

Running the lint locally:

```sh
yarn full-lint
```

## Running custom rule example locally

```sh
npx eslint ./src/example.js
```

## Running custom rule test

```sh
yarn test-custom-rule
```

## WIP: test the code analysis in the sandbox

```sh
rm -rf node_modules && yarn && npx eslint ./src/example.js
```
