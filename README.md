# vue-test-util-symbol-issue

## Purpose
Reproduce an issue with shallowMount of a vue that pass a props of type `Symbol` to a child component.
Test fails with error :
> TypeError: Failed to execute 'setAttribute' on 'Element': parameter 2 is a symbol, which cannot be converted to a string.

To reproduce, install dependencices and run unit tests with
```
npm run test:unit
```

This is a basic project scaffolded with vue cli 4.5.10 (default options) and `unit-jest` plugin.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
